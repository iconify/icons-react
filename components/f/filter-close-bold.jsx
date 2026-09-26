import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbaa69h3m.css';
import '../../css/u/urq7afbns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pbaa69h3m"/><path class="urq7afbns"/></g>`,
		"fallback": "solar:filter-close-bold",
	});
}

export default Component;
