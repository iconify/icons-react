import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dh-362btw.css';
import '../../css/c/c2ccr1cfe.css';
import '../../css/h/hvt2a6e9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dh-362btw"/><path class="c2ccr1cfe"/><path class="hvt2a6e9c"/></g>`,
		"fallback": "solar:armchair-linear",
	});
}

export default Component;
