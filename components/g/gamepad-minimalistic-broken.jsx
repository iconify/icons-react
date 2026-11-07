import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz9iye4tk.css';
import '../../css/a/a9nvjpbmz.css';
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
		"content": `<g class="ipq1z-bjh"><path class="uz9iye4tk"/><path class="a9nvjpbmz"/><path class="sdvb_kngq"/><path class="njaypgbkt"/><path class="jg20qzbix"/></g>`,
		"fallback": "solar:gamepad-minimalistic-broken",
	});
}

export default Component;
