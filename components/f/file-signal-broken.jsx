import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/t/t4qaumccy.css';
import '../../css/p/pal5-l9wu.css';
import '../../css/t/ty2x0tbhn.css';
import '../../css/m/mqyo1zlrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="t4qaumccy"/><path class="pal5-l9wu"/><path class="ty2x0tbhn"/><circle class="mqyo1zlrk"/></g>`,
		"fallback": "solar:file-signal-broken",
	});
}

export default Component;
