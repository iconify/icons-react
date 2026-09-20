import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v4tjwzr-k.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/w/wy63pibnm.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v4tjwzr-k"/><path class="ktpncgb0v"/><path class="wy63pibnm"/><path class="ehgcfqbdl"/></g>`,
		"fallback": "solar:card-broken",
	});
}

export default Component;
