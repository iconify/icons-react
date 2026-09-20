import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wr5xmnbwg.css';
import '../../css/l/l_3y53b4h.css';
import '../../css/u/u-x6mqgqh.css';
import '../../css/q/q9_xxzb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wr5xmnbwg"/><path class="l_3y53b4h"/><path class="u-x6mqgqh"/><path class="q9_xxzb_z"/></g>`,
		"fallback": "solar:filters-broken",
	});
}

export default Component;
