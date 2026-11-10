import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/krv6omv8c.css';
import '../../css/q/q4ndyh7ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="krv6omv8c"/><path class="q4ndyh7ns"/></g>`,
		"fallback": "andrsrxn:device-pc-pause",
	});
}

export default Component;
