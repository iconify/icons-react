import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bmt38ebpo.css';
import '../../css/s/s5eh35bzd.css';
import '../../css/h/hixqu8e0n.css';
import '../../css/m/mioco9dwm.css';
import '../../css/d/d66crdbhn.css';
import '../../css/y/ymq-tib4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bmt38ebpo"/><path class="s5eh35bzd"/><path class="hixqu8e0n"/><path class="mioco9dwm"/><path class="d66crdbhn"/><path class="ymq-tib4j"/></g>`,
		"fallback": "solar:bluetooth-wave-broken",
	});
}

export default Component;
