import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbtbsnbky.css';
import '../../css/d/dq4sp0zgh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rbtbsnbky"/><path class="dq4sp0zgh"/></g>`,
		"fallback": "glyphs:filter-bold",
	});
}

export default Component;
