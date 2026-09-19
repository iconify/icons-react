import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o3lsc_mrp.css';
import '../../css/i/i8tqc-pxn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o3lsc_mrp"/><path class="i8tqc-pxn"/></g>`,
		"fallback": "glyphs:heart-bold",
	});
}

export default Component;
