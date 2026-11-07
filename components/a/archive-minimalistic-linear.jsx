import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wqs3cnbmu.css';
import '../../css/i/iscitzuxy.css';
import '../../css/r/rj_fhqb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wqs3cnbmu"/><path class="iscitzuxy"/><path class="rj_fhqb-s"/></g>`,
		"fallback": "solar:archive-minimalistic-linear",
	});
}

export default Component;
