import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2-3b4bwd.css';
import '../../css/i/i29q2ibib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2-3b4bwd"/><path class="i29q2ibib"/></g>`,
		"fallback": "heroicons:arrow-up-on-square-stack-solid",
	});
}

export default Component;
