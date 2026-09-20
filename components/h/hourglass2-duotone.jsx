import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3jp7g4ta.css';
import '../../css/o/ofygbeg8k.css';
import '../../css/x/xh2vlidti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m3jp7g4ta"/><path class="ofygbeg8k"/><path class="xh2vlidti"/></g>`,
		"fallback": "reicon:hourglass2-duotone",
	});
}

export default Component;
