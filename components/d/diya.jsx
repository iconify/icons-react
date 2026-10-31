import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/g/g7trs0bqv.css';
import '../../css/i/imgbv7b2g.css';
import '../../css/s/sy18qobwq.css';
import '../../css/a/az0uebnsg.css';
import '../../css/t/t277nvb0e.css';
import '../../css/o/ov7993b-z.css';
import '../../css/y/yhhm2i60s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGezmSZSCn" cx="7.42" cy="13.82" r="20.81" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGnOLOBb9F" x1="0" x2="0" y1="21" y2="3" gradientUnits="userSpaceOnUse"><stop offset="0" class="g7trs0bqv"/><stop offset=".5" class="g7trs0bqv"/><stop offset="1" class="pgqql6bua"/></linearGradient></defs><path class="imgbv7b2g wm-shadow"/><path fill="url(#SVGnOLOBb9F)" class="sy18qobwq wm-a"/><path fill="url(#SVGezmSZSCn)" class="az0uebnsg wm-k"/><path class="t277nvb0e wm-shine"/><path class="ov7993b-z wm-deco"/><path class="wm-deco yhhm2i60s"/></g>`,
		"fallback": "withicons-rangoli:diya",
	});
}

export default Component;
