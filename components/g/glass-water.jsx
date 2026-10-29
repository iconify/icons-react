import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5mrk6mkb.css';
import '../../css/b/bmvlsf21d.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/i/iafc0cc5h.css';
import '../../css/q/qjt71ob5m.css';
import '../../css/u/u6jdcibar.css';
import '../../css/u/ulpwx3bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGmDMsCdLE" x1="0" x2="0" y1="-46.35" y2="73.65" gradientUnits="userSpaceOnUse"><stop offset="0" class="t5mrk6mkb"/><stop offset="1" class="bmvlsf21d"/></linearGradient><linearGradient id="SVG0Dw4bcJN" x1="4.1" x2="19.9" y1="2.1" y2="22.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path fill="url(#SVGmDMsCdLE)" class="iafc0cc5h wm-shadow"/><path class="qjt71ob5m wm-k"/><path fill="url(#SVG0Dw4bcJN)" class="u6jdcibar wm-k"/><path class="ulpwx3bcc wm-a"/></g>`,
		"fallback": "withicons-suite:glass-water",
	});
}

export default Component;
