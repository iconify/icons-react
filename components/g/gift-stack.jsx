import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/y/y8o7fxb9f.css';
import '../../css/z/zij904vkv.css';
import '../../css/g/gfy6o-b5g.css';
import '../../css/x/x00yf8c5s.css';
import '../../css/d/d3c9szb8e.css';
import '../../css/t/t-_pg4bze.css';
import '../../css/j/jwml2-bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGftco2Sws" x1="10.01" x2="14.01" y1="4.54" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k y8o7fxb9f"/><path class="wm-deco zij904vkv"/><path fill="url(#SVGftco2Sws)" class="gfy6o-b5g wm-k"/><path class="wm-shadow x00yf8c5s"/><path class="d3c9szb8e wm-shine"/><path class="t-_pg4bze wm-shine"/><path class="jwml2-bwa wm-shine"/></g>`,
		"fallback": "withicons-valentine:gift-stack",
	});
}

export default Component;
