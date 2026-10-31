import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/p_lbm_b3g.css';
import '../../css/n/n9o97lbaq.css';
import '../../css/r/r_yt1g44u.css';
import '../../css/z/z66ezb9kv.css';
import '../../css/d/dcoiyytbs.css';
import '../../css/a/all7vbctc.css';
import '../../css/e/eob32qblp.css';
import '../../css/l/lyk0yebrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNQi7UdpF" x1="10" x2="14" y1="3" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="p_lbm_b3g wm-k"/><path class="n9o97lbaq wm-a"/><path class="r_yt1g44u wm-deco"/><path fill="url(#SVGNQi7UdpF)" class="wm-k z66ezb9kv"/><path class="dcoiyytbs wm-a"/><path class="all7vbctc wm-shadow"/><path class="eob32qblp wm-shine"/><path class="lyk0yebrh wm-shine"/></g>`,
		"fallback": "withicons-valentine:chart-bar",
	});
}

export default Component;
