import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qioz3pgou.css';
import '../../css/x/xdk9_oksp.css';
import '../../css/l/lt87iveio.css';
import '../../css/e/em_q5npjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qioz3pgou"/><path class="xdk9_oksp"/><path class="lt87iveio"/><path class="em_q5npjq"/></g>`,
		"fallback": "solar:grid-3x2-linear",
	});
}

export default Component;
