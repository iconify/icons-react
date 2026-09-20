import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljdj5dikb.css';
import '../../css/f/fi3ewwbnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljdj5dikb"/><path class="fi3ewwbnh"/></g>`,
		"fallback": "nrk:antenna-expressive",
	});
}

export default Component;
