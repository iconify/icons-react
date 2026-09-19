import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gw-3o2bdq.css';
import '../../css/t/t8wqp2bay.css';
import '../../css/x/xb0hh6bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gw-3o2bdq"/><path class="t8wqp2bay"/><path class="xb0hh6bzv"/></g>`,
		"fallback": "hugeicons:doughnut",
	});
}

export default Component;
