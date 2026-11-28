import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcqj3jp6n.css';
import '../../css/n/nrpttmn6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcqj3jp6n secondary"/><path class="nrpttmn6w primary"/></g>`,
		"fallback": "iconaut:arrow-u-turn-down-duotone",
	});
}

export default Component;
