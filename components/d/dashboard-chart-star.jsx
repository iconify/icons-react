import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d37f5mbjl.css';
import '../../css/j/jz666vlxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d37f5mbjl"/><path class="jz666vlxa"/></g>`,
		"fallback": "mage:dashboard-chart-star",
	});
}

export default Component;
