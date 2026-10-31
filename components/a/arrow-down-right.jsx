import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bndf81zcz.css';
import '../../css/k/kbawj9h0z.css';
import '../../css/d/d4usr6ilk.css';
import '../../css/b/blid5xl-u.css';
import '../../css/n/nlk9q-zhp.css';
import '../../css/l/lfzm2-b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQe53eb6d" x1="10" x2="14" y1="5.52" y2="18.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bndf81zcz wm-k"/><path class="kbawj9h0z wm-deco"/><path fill="url(#SVGQe53eb6d)" class="d4usr6ilk wm-k"/><path class="blid5xl-u wm-shadow"/><path class="nlk9q-zhp wm-shine"/><path class="lfzm2-b0y wm-shine"/></g>`,
		"fallback": "withicons-valentine:arrow-down-right",
	});
}

export default Component;
