import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i2p-_hbwz.css';
import '../../css/o/o7vxnob1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i2p-_hbwz"/><path class="o7vxnob1s"/></g>`,
		"fallback": "solar:import-linear",
	});
}

export default Component;
