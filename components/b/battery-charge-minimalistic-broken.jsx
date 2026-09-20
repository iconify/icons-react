import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tnfby2q5d.css';
import '../../css/p/pu97ujszu.css';
import '../../css/d/d7egxzbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tnfby2q5d"/><path class="pu97ujszu"/><path class="d7egxzbrr"/></g>`,
		"fallback": "solar:battery-charge-minimalistic-broken",
	});
}

export default Component;
