import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bz0jvpb-d.css';
import '../../css/v/v21m74bug.css';
import '../../css/p/p3e1gbb5o.css';
import '../../css/i/iue5zwajg.css';
import '../../css/q/q7ozmg0hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGWIPAFndQ" x1="10" x2="14" y1="2" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bz0jvpb-d wm-k"/><path fill="url(#SVGWIPAFndQ)" class="v21m74bug wm-k"/><path class="p3e1gbb5o wm-shadow"/><path class="iue5zwajg wm-shine"/><path class="q7ozmg0hq wm-shine"/></g>`,
		"fallback": "withicons-valentine:grid-2x2",
	});
}

export default Component;
