import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m60wgih6x.css';
import '../../css/n/n6fy5acwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="m60wgih6x"/><path class="n6fy5acwi wm-a"/></g>`,
		"fallback": "withicons:balloon-solid",
	});
}

export default Component;
