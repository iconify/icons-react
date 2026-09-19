import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sd20hni4u.css';
import '../../css/i/i29q2ibib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sd20hni4u"/><path class="i29q2ibib"/></g>`,
		"fallback": "heroicons:arrow-down-on-square-stack-solid",
	});
}

export default Component;
