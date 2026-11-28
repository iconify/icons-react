import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/db14-cbcu.css';
import '../../css/c/c_z-u0bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="db14-cbcu secondary"/><path class="c_z-u0bna primary"/></g>`,
		"fallback": "iconaut:cloud-rain-heavy-duotone",
	});
}

export default Component;
