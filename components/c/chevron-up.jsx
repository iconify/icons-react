import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/h/hen0p1b5c.css';
import '../../css/t/tt55_fc-h.css';
import '../../css/l/lfqa-1bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkaWnCeEt" x1="10" x2="14" y1="8.01" y2="16" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="hen0p1b5c wm-k"/><path class="tt55_fc-h wm-deco"/><path fill="url(#SVGkaWnCeEt)" class="lfqa-1bsl wm-k"/></g>`,
		"fallback": "withicons-valentine:chevron-up",
	});
}

export default Component;
