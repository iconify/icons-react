import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcgxpm4ir.css';
import '../../css/b/bnphexb7f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mcgxpm4ir"/><path class="bnphexb7f"/></g>`,
		"fallback": "glyphs:grin-squint-tears-bold",
	});
}

export default Component;
