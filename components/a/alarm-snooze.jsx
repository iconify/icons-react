import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/se86zivnm.css';
import '../../css/m/m6mstacay.css';
import '../../css/a/aqaeenr8b.css';
import '../../css/g/gla_ixo6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="se86zivnm"/><path class="m6mstacay"/><path class="aqaeenr8b"/><path class="gla_ixo6i"/></g>`,
		"fallback": "streamline-cyber-color:alarm-snooze",
	});
}

export default Component;
