import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/t7r2hsbkl.css';
import '../../css/r/r7fjghi8c.css';
import '../../css/f/f92kf4b-y.css';
import '../../css/y/y8s5s_kaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3DbV8dLG" x1="10" x2="14" y1="3.01" y2="20.98" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="t7r2hsbkl wm-k"/><path class="r7fjghi8c wm-deco"/><path fill="url(#SVG3DbV8dLG)" class="f92kf4b-y wm-k"/><path class="wm-shadow y8s5s_kaz"/></g>`,
		"fallback": "withicons-valentine:audio-waveform",
	});
}

export default Component;
