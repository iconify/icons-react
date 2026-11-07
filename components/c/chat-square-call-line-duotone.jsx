import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cwdjznwva.css';
import '../../css/l/lmjzr2g6g.css';
import '../../css/r/rwct17yif.css';
import '../../css/c/cx31vwdjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cwdjznwva"/><path class="lmjzr2g6g"/><path class="rwct17yif"/><path class="cx31vwdjv"/></g>`,
		"fallback": "solar:chat-square-call-line-duotone",
	});
}

export default Component;
