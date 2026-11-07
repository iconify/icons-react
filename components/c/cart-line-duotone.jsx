import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wdhm326bq.css';
import '../../css/a/ahcwsvb2k.css';
import '../../css/l/lgdpnsvji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wdhm326bq"/><path class="ahcwsvb2k"/><path class="lgdpnsvji"/></g>`,
		"fallback": "solar:cart-line-duotone",
	});
}

export default Component;
