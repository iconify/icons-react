import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p1_nczbpv.css';
import '../../css/f/fdqyawopr.css';
import '../../css/k/kg_k8zbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p1_nczbpv"/><path class="fdqyawopr"/><path class="kg_k8zbim"/></g>`,
		"fallback": "solar:bottle-linear",
	});
}

export default Component;
