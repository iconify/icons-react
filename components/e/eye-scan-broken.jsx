import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijwbgek4s.css';
import '../../css/w/w1fn0ab-e.css';
import '../../css/r/r6k29b9ku.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/p/pckaxha-v.css';
import '../../css/y/y_s7vvbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ijwbgek4s"/><path class="w1fn0ab-e"/><path class="r6k29b9ku"/><circle class="h_tsn8bxt"/><path class="pckaxha-v"/><path class="y_s7vvbss"/></g>`,
		"fallback": "solar:eye-scan-broken",
	});
}

export default Component;
