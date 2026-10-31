import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kqf9kteez.css';
import '../../css/u/u6x6b5brj.css';
import '../../css/w/wjithk82w.css';
import '../../css/b/bs3-hebhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kqf9kteez wm-k"/><path class="u6x6b5brj wm-deco"/><path fill="url(#SVGH854iddR)" class="wjithk82w wm-k"/><path class="bs3-hebhx wm-shadow"/></g>`,
		"fallback": "withicons-valentine:hash",
	});
}

export default Component;
