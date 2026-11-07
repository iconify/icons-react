import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ahcwsvb2k.css';
import '../../css/l/lgdpnsvji.css';
import '../../css/u/ux4dmub_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ahcwsvb2k"/><path class="lgdpnsvji"/><path class="ux4dmub_z"/></g>`,
		"fallback": "solar:cart-linear",
	});
}

export default Component;
