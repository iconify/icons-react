import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/tkib2ccfi.css';
import '../../css/z/z2bow3mdw.css';
import '../../css/r/r43jprbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGQXQnRcgA" x1="10" x2="14" y1="5" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="tkib2ccfi wm-k"/><path class="wm-deco z2bow3mdw"/><path fill="url(#SVGQXQnRcgA)" class="r43jprbqu wm-k"/></g>`,
		"fallback": "withicons-valentine:chevrons-left",
	});
}

export default Component;
