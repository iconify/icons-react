import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kwapx1btc.css';
import '../../css/c/c2ccr1cfe.css';
import '../../css/l/lx85-ac0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kwapx1btc"/><path class="c2ccr1cfe"/><path class="lx85-ac0b"/></g>`,
		"fallback": "solar:armchair-linear",
	});
}

export default Component;
