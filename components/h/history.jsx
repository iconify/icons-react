import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/ncqqhdbwk.css';
import '../../css/r/ribx98bku.css';
import '../../css/g/gnle1ph2a.css';
import '../../css/z/z5uqdac3u.css';
import '../../css/f/fpw2qcc0b.css';
import '../../css/s/sjrdwlpkb.css';
import '../../css/i/i8taxebjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGw8JQZcNA" x1="10" x2="14" y1="3.01" y2="21.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ncqqhdbwk wm-k"/><path class="ribx98bku wm-deco"/><path class="gnle1ph2a wm-k"/><path fill="url(#SVGw8JQZcNA)" class="wm-k z5uqdac3u"/><path class="fpw2qcc0b wm-shadow"/><path class="sjrdwlpkb wm-shine"/><path class="i8taxebjb wm-shine"/></g>`,
		"fallback": "withicons-valentine:history",
	});
}

export default Component;
