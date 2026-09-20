import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmgl-eb6q.css';
import '../../css/u/uo5o80t3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fmgl-eb6q"/><path class="uo5o80t3q"/></g>`,
		"fallback": "solar:hand-heart-broken",
	});
}

export default Component;
