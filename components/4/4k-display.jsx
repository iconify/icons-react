import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ycy-3wl1l.css';
import '../../css/m/mh006xb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ycy-3wl1l"/><path class="mh006xb8p"/></g>`,
		"fallback": "iconoir:4k-display",
	});
}

export default Component;
