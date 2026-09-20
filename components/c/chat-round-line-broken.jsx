import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e48ledu_g.css';
import '../../css/k/k6sgsiwcv.css';
import '../../css/a/ad99r3bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e48ledu_g"/><path class="k6sgsiwcv"/><path class="ad99r3bgz"/></g>`,
		"fallback": "solar:chat-round-line-broken",
	});
}

export default Component;
