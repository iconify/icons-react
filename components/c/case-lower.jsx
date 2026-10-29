import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/p/pw-r-nd6x.css';
import '../../css/m/mlyc2sbxm.css';
import '../../css/i/isa0icc7r.css';
import '../../css/v/v_fo37bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGUbqtgcSd" x1="13.6" x2="22.4" y1="3.6" y2="19.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGAgQIKcWV" x1="1.4" x2="10.6" y1="10.9" y2="20.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="pw-r-nd6x wm-a"/><path fill="url(#SVGUbqtgcSd)" class="mlyc2sbxm wm-a"/><path class="isa0icc7r wm-k"/><path fill="url(#SVGAgQIKcWV)" class="v_fo37bwi wm-k"/></g>`,
		"fallback": "withicons-suite:case-lower",
	});
}

export default Component;
