import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cjcjyfbkq.css';
import '../../css/t/t4_mbfm4h.css';
import '../../css/m/m-f01abwr.css';
import '../../css/m/m8xh3tzip.css';
import '../../css/s/slk4sp16n.css';
import '../../css/d/dicainbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cjcjyfbkq"/><path class="t4_mbfm4h"/><path class="m-f01abwr"/><path class="m8xh3tzip"/><path class="slk4sp16n"/><path class="dicainbtc"/></g>`,
		"fallback": "solar:car-battery-broken",
	});
}

export default Component;
