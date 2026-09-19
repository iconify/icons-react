import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kl38xybib.css';
import '../../css/l/lc961iged.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kl38xybib"/><path class="lc961iged"/></g>`,
		"fallback": "hugeicons:cotton-candy",
	});
}

export default Component;
