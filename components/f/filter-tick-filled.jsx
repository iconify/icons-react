import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mgatdwbpp.css';
import '../../css/v/vtoyotbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mgatdwbpp"/><path class="vtoyotbhp"/></g>`,
		"fallback": "reicon:filter-tick-filled",
	});
}

export default Component;
