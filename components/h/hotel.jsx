import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wsxc_-96c.css';
import '../../css/x/xjyjppbej.css';
import '../../css/v/v2aj0w8gj.css';
import '../../css/l/lbcau4b2x.css';
import '../../css/w/wmyojbclg.css';
import '../../css/e/ex8_mj5iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFktW4cac" x1="10" x2="14" y1="2" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k wsxc_-96c"/><path class="wm-k xjyjppbej"/><path fill="url(#SVGFktW4cac)" class="v2aj0w8gj wm-k"/><path class="lbcau4b2x wm-shadow"/><path class="wm-shine wmyojbclg"/><path class="ex8_mj5iy wm-shine"/></g>`,
		"fallback": "withicons-valentine:hotel",
	});
}

export default Component;
