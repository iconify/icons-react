import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3_z4jwuz.css';
import '../../css/d/diganyb_v.css';
import '../../css/d/dq5vnybwc.css';
import '../../css/k/kr-uft0lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3_z4jwuz"/><path class="diganyb_v"/><path class="dq5vnybwc"/><path class="kr-uft0lf"/></g>`,
		"fallback": "streamline-cyber-color:airplane-departure",
	});
}

export default Component;
