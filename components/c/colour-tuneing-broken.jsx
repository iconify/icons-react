import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qgqu_pb0s.css';
import '../../css/j/j79kd2b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qgqu_pb0s"/><path class="j79kd2b8o"/></g>`,
		"fallback": "solar:colour-tuneing-broken",
	});
}

export default Component;
