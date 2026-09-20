import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/irgi_rb-g.css';
import '../../css/k/kwapx1btc.css';
import '../../css/u/uniftz_yv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="irgi_rb-g"/><path class="kwapx1btc"/><path class="uniftz_yv"/></g>`,
		"fallback": "solar:armchair-line-duotone",
	});
}

export default Component;
