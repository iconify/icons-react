import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmra16ofi.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmra16ofi"/>`,
		"fallback": "si-glyph:female",
	});
}

export default Component;
