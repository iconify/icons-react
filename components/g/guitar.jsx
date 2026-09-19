import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd9ow5bsp.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zd9ow5bsp"/>`,
		"fallback": "si-glyph:guitar",
	});
}

export default Component;
