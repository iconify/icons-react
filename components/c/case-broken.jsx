import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fku6--sxs.css';
import '../../css/u/uo7ud1b4w.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/a/acwk9qbkt.css';
import '../../css/e/e_466bh1b.css';
import '../../css/d/dfkb1eb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fku6--sxs"/><path class="uo7ud1b4w"/><path class="tg6vyv3do"/><path class="acwk9qbkt"/><path class="e_466bh1b"/><path class="dfkb1eb4o"/></g>`,
		"fallback": "solar:case-broken",
	});
}

export default Component;
