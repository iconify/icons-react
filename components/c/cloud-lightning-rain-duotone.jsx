import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/betm9-svt.css';
import '../../css/w/wb3w8rb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="betm9-svt secondary"/><path class="primary wb3w8rb3o"/></g>`,
		"fallback": "iconaut:cloud-lightning-rain-duotone",
	});
}

export default Component;
