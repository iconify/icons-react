import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8ns4tb9k.css';
import '../../css/f/fue8kp0ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8ns4tb9k"/><path class="fue8kp0ma"/></g>`,
		"fallback": "si:clear-day-duotone",
	});
}

export default Component;
