import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/ryzuzte4l.css';
import '../../css/s/sfhwod20k.css';
import '../../css/m/mgi0prddj.css';
import '../../css/q/qrjho0bzf.css';
import '../../css/u/uajukkbyr.css';
import '../../css/s/s1diy6bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG8cgrrczU" x1="10" x2="14" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ryzuzte4l wm-k"/><path class="sfhwod20k wm-deco"/><path fill="url(#SVG8cgrrczU)" class="mgi0prddj wm-k"/><path class="qrjho0bzf wm-shadow"/><path class="uajukkbyr wm-shine"/><path class="s1diy6bfh wm-shine"/></g>`,
		"fallback": "withicons-valentine:baseball",
	});
}

export default Component;
