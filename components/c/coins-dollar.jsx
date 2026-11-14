import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d740l9q4p.css';
import '../../css/i/iji3dtbfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d740l9q4p"/><path class="iji3dtbfa"/></g>`,
		"fallback": "hugeicons:coins-dollar",
	});
}

export default Component;
