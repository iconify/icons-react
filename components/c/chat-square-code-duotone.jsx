import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir6sljbso.css';
import '../../css/h/h_vty-bgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ir6sljbso"/><path clip-rule="evenodd" class="h_vty-bgv"/></g>`,
		"fallback": "reicon:chat-square-code-duotone",
	});
}

export default Component;
