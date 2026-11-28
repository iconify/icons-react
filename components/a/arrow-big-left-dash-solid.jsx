import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gapvgoxgm.css';
import '../../css/d/dhcmpjbau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gapvgoxgm"/><path class="dhcmpjbau"/></g>`,
		"fallback": "iconaut:arrow-big-left-dash-solid",
	});
}

export default Component;
