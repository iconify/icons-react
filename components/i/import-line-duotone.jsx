import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/myq4vybmx.css';
import '../../css/o/o7vxnob1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="myq4vybmx"/><path class="o7vxnob1s"/></g>`,
		"fallback": "solar:import-line-duotone",
	});
}

export default Component;
