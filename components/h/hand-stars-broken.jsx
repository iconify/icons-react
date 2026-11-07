import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/ch_n9zb8m.css';
import '../../css/o/og7lw7bbb.css';
import '../../css/b/b4_rsjb-p.css';
import '../../css/o/ob35u0bzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ch_n9zb8m"/><path class="og7lw7bbb"/><path class="b4_rsjb-p"/><path class="ob35u0bzq"/></g>`,
		"fallback": "solar:hand-stars-broken",
	});
}

export default Component;
