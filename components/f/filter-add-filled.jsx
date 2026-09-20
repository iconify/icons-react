import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w9cd51bir.css';
import '../../css/v/vtoyotbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w9cd51bir"/><path class="vtoyotbhp"/></g>`,
		"fallback": "reicon:filter-add-filled",
	});
}

export default Component;
