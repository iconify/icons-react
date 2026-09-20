import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qgqu_pb0s.css';
import '../../css/u/ub3rxq97j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qgqu_pb0s"/><path class="ub3rxq97j"/></g>`,
		"fallback": "solar:colour-tuneing-linear",
	});
}

export default Component;
