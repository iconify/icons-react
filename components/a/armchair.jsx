import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/awym0sjrc.css';
import '../../css/j/jw68-f4-x.css';
import '../../css/w/w7y1y7fvt.css';
import '../../css/w/wia72jysi.css';
import '../../css/k/ku-asccgc.css';
import '../../css/n/n9az9obbj.css';
import '../../css/e/e14nbpbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkr7NFb3E" x1="10" x2="14" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="awym0sjrc wm-k"/><path class="jw68-f4-x wm-deco"/><path class="w7y1y7fvt wm-k"/><path fill="url(#SVGkr7NFb3E)" class="wia72jysi wm-k"/><path class="ku-asccgc wm-shadow"/><path class="n9az9obbj wm-shine"/><path class="e14nbpbmg wm-shine"/></g>`,
		"fallback": "withicons-valentine:armchair",
	});
}

export default Component;
