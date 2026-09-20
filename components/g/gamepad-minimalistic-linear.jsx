import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vcnn2obdo.css';
import '../../css/q/q06c_hbai.css';
import '../../css/s/sdvb_kngq.css';
import '../../css/n/njaypgbkt.css';
import '../../css/j/jg20qzbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vcnn2obdo"/><path class="q06c_hbai"/><path class="sdvb_kngq"/><path class="njaypgbkt"/><path class="jg20qzbix"/></g>`,
		"fallback": "solar:gamepad-minimalistic-linear",
	});
}

export default Component;
