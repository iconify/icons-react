import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3a0jonhc.css';
import '../../css/k/k7mm90b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3a0jonhc secondary"/><path class="k7mm90b-z primary"/></g>`,
		"fallback": "iconaut:health-potion-duotone",
	});
}

export default Component;
