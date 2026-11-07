import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nkpezbglv.css';
import '../../css/l/l934m7d5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nkpezbglv"/><path class="l934m7d5g"/></g>`,
		"fallback": "solar:diagram-up-broken",
	});
}

export default Component;
