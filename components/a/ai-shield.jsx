import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l5amd1two.css';
import '../../css/c/c9u2s_lcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l5amd1two"/><path class="c9u2s_lcm"/></g>`,
		"fallback": "iconaut:ai-shield",
	});
}

export default Component;
