import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz_kbtsof.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wbizk1a7x.css';
import '../../css/i/ip79ax0mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz_kbtsof secondary"/><g class="dt0cm9dhy primary"><path class="wbizk1a7x"/><path class="ip79ax0mg"/></g>`,
		"fallback": "iconaut:garage-open-duo",
	});
}

export default Component;
