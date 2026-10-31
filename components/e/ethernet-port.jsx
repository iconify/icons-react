import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/f/f9a41ybpd.css';
import '../../css/x/xv5twgb-c.css';
import '../../css/a/as14uji3q.css';
import '../../css/o/oq5lcebhi.css';
import '../../css/h/hhjkmht6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGvZLLte8C" x1="10" x2="14" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="f9a41ybpd wm-k"/><path class="wm-deco xv5twgb-c"/><path class="as14uji3q wm-k"/><path fill="url(#SVGvZLLte8C)" class="oq5lcebhi wm-k"/><path class="hhjkmht6i wm-shadow"/></g>`,
		"fallback": "withicons-valentine:ethernet-port",
	});
}

export default Component;
