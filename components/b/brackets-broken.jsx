import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc6p54bfo.css';
import '../../css/m/m5flx0poa.css';
import '../../css/l/l142rrhgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sc6p54bfo"/><path class="m5flx0poa"/><path class="l142rrhgl"/></g>`,
		"fallback": "solar:brackets-broken",
	});
}

export default Component;
