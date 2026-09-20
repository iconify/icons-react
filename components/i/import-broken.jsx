import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7vxnob1s.css';
import '../../css/w/wi643n5is.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o7vxnob1s"/><path class="wi643n5is"/></g>`,
		"fallback": "solar:import-broken",
	});
}

export default Component;
