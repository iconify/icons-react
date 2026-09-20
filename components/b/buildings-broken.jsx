import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/y/y_iv01b1u.css';
import '../../css/h/hylr3xuoq.css';
import '../../css/e/ei794fi6p.css';
import '../../css/t/ts5ptqk6t.css';
import '../../css/p/pbl0ytb4m.css';
import '../../css/s/sjohn6bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="y_iv01b1u"/><path class="hylr3xuoq"/><path class="ei794fi6p"/><path class="ts5ptqk6t"/><path class="pbl0ytb4m"/><path class="sjohn6bax"/></g>`,
		"fallback": "solar:buildings-broken",
	});
}

export default Component;
