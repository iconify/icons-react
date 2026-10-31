import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zsutber_m.css';
import '../../css/a/ath261w1x.css';
import '../../css/b/bqg0h0hls.css';
import '../../css/s/s_gyana-m.css';
import '../../css/d/dxlfj145c.css';
import '../../css/f/fvwlu1bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGpHG62N5p" x1="10.01" x2="14.01" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zsutber_m"/><path class="ath261w1x wm-k"/><path fill="url(#SVGpHG62N5p)" class="bqg0h0hls wm-k"/><path class="s_gyana-m wm-shadow"/><path class="dxlfj145c wm-shine"/><path class="fvwlu1bwm wm-shine"/></g>`,
		"fallback": "withicons-valentine:banknote",
	});
}

export default Component;
