import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/isfkj5b_q.css';
import '../../css/y/yj0-viwyb.css';
import '../../css/o/oifdkrbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="isfkj5b_q"/><path class="yj0-viwyb"/><path class="oifdkrbmo"/></g>`,
		"fallback": "reicon:alarm-clock-off",
	});
}

export default Component;
