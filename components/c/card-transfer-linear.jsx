import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h9njkdbfq.css';
import '../../css/d/dqoud86nz.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/a/arfwosbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h9njkdbfq"/><path class="dqoud86nz"/><path class="ktpncgb0v"/><path class="arfwosbro"/></g>`,
		"fallback": "solar:card-transfer-linear",
	});
}

export default Component;
