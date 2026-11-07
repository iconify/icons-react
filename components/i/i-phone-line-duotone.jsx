import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gy5n-26px.css';
import '../../css/l/l0yi6obcv.css';
import '../../css/e/eh005u_hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gy5n-26px"/><path class="l0yi6obcv"/><path class="eh005u_hc"/></g>`,
		"fallback": "solar:i-phone-line-duotone",
	});
}

export default Component;
