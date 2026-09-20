import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/worxp0b1t.css';
import '../../css/k/k8_yxdbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="worxp0b1t"/><path class="k8_yxdbyl"/></g>`,
		"fallback": "solar:filters-line-duotone",
	});
}

export default Component;
