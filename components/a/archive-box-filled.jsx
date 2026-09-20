import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0_q0d9vp.css';
import '../../css/v/vg_gcmbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0_q0d9vp"/><path class="vg_gcmbvz"/></g>`,
		"fallback": "reicon:archive-box-filled",
	});
}

export default Component;
