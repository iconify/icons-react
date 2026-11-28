import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjvrjjbrr.css';
import '../../css/v/vrp7erb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjvrjjbrr secondary"/><path class="primary vrp7erb1v"/></g>`,
		"fallback": "iconaut:battery-low-duotone",
	});
}

export default Component;
