import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/l/ljs7yyblc.css';
import '../../css/x/x85-rla9s.css';
import '../../css/q/qu9290bks.css';
import '../../css/n/nxl3zmbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXt4EdcmZ" x1="0" x2="0" y1="-44.85" y2="75.15" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVGn8Fnkxpd" x1="2.1" x2="21.9" y1="3.1" y2="21.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGXt4EdcmZ)" class="ljs7yyblc wm-shadow"/><path class="wm-k x85-rla9s"/><path fill="url(#SVGn8Fnkxpd)" class="qu9290bks wm-k"/><path class="nxl3zmbhv wm-s"/></g>`,
		"fallback": "withicons-suite:heart-plus",
	});
}

export default Component;
