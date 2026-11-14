import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pbf3tac8b.css';
import '../../css/i/in1-w5bvf.css';
import '../../css/f/fubf0l-sd.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pbf3tac8b"/><path class="in1-w5bvf"/><path class="fubf0l-sd"/><path class="nh-ps30pw"/></g>`,
		"fallback": "hugeicons:chart-network",
	});
}

export default Component;
