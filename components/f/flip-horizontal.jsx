import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h3-rkgosv.css';
import '../../css/v/vz-jk6f5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h3-rkgosv"/><path class="vz-jk6f5l"/></g>`,
		"fallback": "hugeicons:flip-horizontal",
	});
}

export default Component;
