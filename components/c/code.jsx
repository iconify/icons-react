import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/n/nb9oivbbg.css';
import '../../css/j/jd0mc30ny.css';
import '../../css/c/cexs59__j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcVYqXc8c" x1="10" x2="14" y1="3.51" y2="20.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="nb9oivbbg wm-k"/><path class="jd0mc30ny wm-deco"/><path fill="url(#SVGcVYqXc8c)" class="cexs59__j wm-k"/></g>`,
		"fallback": "withicons-valentine:code",
	});
}

export default Component;
