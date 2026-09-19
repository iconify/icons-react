import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuunh1bfh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuunh1bfh"/>`,
		"fallback": "si-glyph:float",
	});
}

export default Component;
