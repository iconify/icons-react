import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp-bddbra.css';
import '../../css/o/otcdo1q_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cp-bddbra"/><path class="otcdo1q_o"/></g>`,
		"fallback": "majesticons:beach",
	});
}

export default Component;
