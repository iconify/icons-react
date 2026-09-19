import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm9rcacmh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm9rcacmh"/>`,
		"fallback": "si-glyph:arrow-change",
	});
}

export default Component;
