import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v-qm0101m.css';
import '../../css/d/d302z1b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v-qm0101m"/><path class="d302z1b2m"/></g>`,
		"fallback": "solar:calculator-minimalistic-linear",
	});
}

export default Component;
