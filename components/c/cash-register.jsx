import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/x/xgqnu-9xh.css';
import '../../css/q/q4_g9ac_k.css';
import '../../css/w/wzwx7z8nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXCy6ndkR" x1="9" x2="15" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGXCy6ndkR)" class="xgqnu-9xh"/><path class="q4_g9ac_k wm-a"/><path class="wm-shine wzwx7z8nl"/></g>`,
		"fallback": "withicons-utsav:cash-register",
	});
}

export default Component;
