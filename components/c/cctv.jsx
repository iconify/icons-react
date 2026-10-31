import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/z/z0twawb7n.css';
import '../../css/n/ncecvgbaw.css';
import '../../css/p/psd2wd9wv.css';
import '../../css/o/obwb75hab.css';
import '../../css/t/ta5vn2bxy.css';
import '../../css/y/yhhm2i60s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVG9qCFPe7p" cx="6.68" cy="11.97" r="18.84" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wm-shadow z0twawb7n"/><path fill="url(#SVGDCUexbkg)" class="ncecvgbaw wm-a"/><path fill="url(#SVG9qCFPe7p)" class="psd2wd9wv wm-k"/><path class="obwb75hab wm-shine"/><path class="ta5vn2bxy wm-deco"/><path class="wm-deco yhhm2i60s"/></g>`,
		"fallback": "withicons-rangoli:cctv",
	});
}

export default Component;
