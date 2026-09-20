import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-llhz78d.css';
import '../../css/t/t6vi4ublf.css';
import '../../css/n/nxeolsbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l-llhz78d"/><path class="t6vi4ublf"/><path class="nxeolsbrv"/></g>`,
		"fallback": "solar:archive-up-minimlistic-broken",
	});
}

export default Component;
