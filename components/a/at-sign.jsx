import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/jqlgf1kur.css';
import '../../css/q/q5ix4cqxt.css';
import '../../css/n/nrmofrblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGINyjEdHv" x1="10" x2="14" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="jqlgf1kur wm-k"/><path class="q5ix4cqxt wm-deco"/><path fill="url(#SVGINyjEdHv)" class="nrmofrblp wm-k"/></g>`,
		"fallback": "withicons-valentine:at-sign",
	});
}

export default Component;
