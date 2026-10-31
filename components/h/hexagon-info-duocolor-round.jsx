import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o_xv2lbek.css';
import '../../css/m/m5m2x9czc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o_xv2lbek"/><path class="m5m2x9czc"/></g>`,
		"fallback": "coolicons:hexagon-info-duocolor-round",
	});
}

export default Component;
