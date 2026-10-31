import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/r/rnv-bmipr.css';
import '../../css/c/c7y-50b4i.css';
import '../../css/u/uki1tdaap.css';
import '../../css/o/oceno2o4j.css';
import '../../css/d/d6ik-uzxo.css';
import '../../css/w/wlpjdrb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="rnv-bmipr wm-k"/><path class="c7y-50b4i wm-deco"/><path fill="url(#SVGWIPAFndQ)" class="uki1tdaap wm-k"/><path class="oceno2o4j wm-shadow"/><path class="d6ik-uzxo wm-shine"/><path class="wlpjdrb-u wm-shine"/></g>`,
		"fallback": "withicons-valentine:git-pull-request",
	});
}

export default Component;
