import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2strbb_c.css';
import '../../css/y/yr3iwbkpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i2strbb_c"/><path class="yr3iwbkpr"/></g>`,
		"fallback": "lets-icons:alarmclock-duotone",
	});
}

export default Component;
