import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/imx161iql.css';
import '../../css/a/a1-a0knoo.css';
import '../../css/f/fumgbtb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="imx161iql"/><path class="a1-a0knoo"/><path class="fumgbtb-p"/></g>`,
		"fallback": "keyline-icons:calculator-sparkles-two-tone",
	});
}

export default Component;
