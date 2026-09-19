import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nieziccsm.css';
import '../../css/s/s0m9qkbub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nieziccsm"/><path clip-rule="evenodd" class="s0m9qkbub"/></g>`,
		"fallback": "heroicons-solid:bell-alert",
	});
}

export default Component;
