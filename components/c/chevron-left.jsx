import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/b/bksqs05-t.css';
import '../../css/w/wc235qbza.css';
import '../../css/d/d18mwjr6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQXQnRcgA" x1="10" x2="14" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="bksqs05-t wm-k"/><path class="wc235qbza wm-deco"/><path fill="url(#SVGQXQnRcgA)" class="d18mwjr6m wm-k"/></g>`,
		"fallback": "withicons-valentine:chevron-left",
	});
}

export default Component;
