import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e50u_plcd.css';
import '../../css/f/f7ucrubyr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e50u_plcd secondary"/><path class="f7ucrubyr primary"/></g>`,
		"fallback": "iconaut:frog-duotone",
	});
}

export default Component;
