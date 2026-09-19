import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e5-uojhch.css';
import '../../css/e/ekz7fibqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e5-uojhch"/><path class="ekz7fibqz"/></g>`,
		"fallback": "hugeicons:battery-eco-charging",
	});
}

export default Component;
