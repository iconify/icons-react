import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkr1umbgt.css';
import '../../css/m/myt9nh07d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wkr1umbgt"/><path class="myt9nh07d primary"/></g>`,
		"fallback": "iconaut:dollar-sign-duotone",
	});
}

export default Component;
