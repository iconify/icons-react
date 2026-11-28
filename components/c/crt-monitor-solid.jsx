import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ye6l_b2yi.css';
import '../../css/t/t4pnbvbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ye6l_b2yi"/><path class="t4pnbvbhz"/></g>`,
		"fallback": "iconaut:crt-monitor-solid",
	});
}

export default Component;
