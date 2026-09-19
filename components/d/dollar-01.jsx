import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kkk-qh3mo.css';
import '../../css/g/g9-v_lbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kkk-qh3mo"/><path class="g9-v_lbfl"/></g>`,
		"fallback": "hugeicons:dollar-01",
	});
}

export default Component;
