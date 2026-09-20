import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/d/dfu02tbjk.css';
import '../../css/u/u4ilc2vzz.css';
import '../../css/c/cd-27r62f.css';
import '../../css/j/j92jepb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="dfu02tbjk"/><path class="u4ilc2vzz"/><path class="cd-27r62f"/><path clip-rule="evenodd" class="j92jepb7b"/></g>`,
		"fallback": "solar:bluetooth-circle-bold-duotone",
	});
}

export default Component;
