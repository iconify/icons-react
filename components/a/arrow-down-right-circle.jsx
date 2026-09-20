import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x62gjrbgg.css';
import '../../css/v/vrikfbbdt.css';
import '../../css/n/n5pc76bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x62gjrbgg"/><path class="vrikfbbdt"/><path class="n5pc76bja"/></g>`,
		"fallback": "mage:arrow-down-right-circle",
	});
}

export default Component;
