import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/k/ko61sebdo.css';
import '../../css/s/ss4lcopja.css';
import '../../css/m/mrs3t3kgg.css';
import '../../css/l/lc-ghbc7u.css';
import '../../css/d/dloam465w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJNpqtbMX" x1="5.6" x2="16.9" y1="7.1" y2="18.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGcZcgue6Q" x1="5.4" x2="18.6" y1="5.4" y2="18.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="ko61sebdo wm-a"/><path fill="url(#SVGJNpqtbMX)" class="ss4lcopja wm-a"/><path class="mrs3t3kgg wm-k"/><path class="lc-ghbc7u wm-k"/><path fill="url(#SVGcZcgue6Q)" class="dloam465w wm-k"/></g>`,
		"fallback": "withicons-suite:arrow-down-left",
	});
}

export default Component;
