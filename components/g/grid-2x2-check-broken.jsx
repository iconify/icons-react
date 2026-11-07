import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/taogqpb9g.css';
import '../../css/f/fq2i0fpuc.css';
import '../../css/f/frr67dw0i.css';
import '../../css/n/noodpccbe.css';
import '../../css/v/vhw97bcth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="taogqpb9g"/><path class="fq2i0fpuc"/><path class="frr67dw0i"/><path class="noodpccbe"/><path class="vhw97bcth"/></g>`,
		"fallback": "solar:grid-2x2-check-broken",
	});
}

export default Component;
