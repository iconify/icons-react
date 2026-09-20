import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/na80fjbih.css';
import '../../css/t/tnfby2q5d.css';
import '../../css/d/d7egxzbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="na80fjbih"/><path class="tnfby2q5d"/><path class="d7egxzbrr"/></g>`,
		"fallback": "solar:battery-low-minimalistic-broken",
	});
}

export default Component;
