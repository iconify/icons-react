import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ruv6qebfz.css';
import '../../css/l/lqgf2_b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ruv6qebfz secondary"/><path class="lqgf2_b6f primary"/></g>`,
		"fallback": "iconaut:arrow-big-up-dash-duotone",
	});
}

export default Component;
