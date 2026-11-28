import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h883a2qdd.css';
import '../../css/g/gw6bgvmzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h883a2qdd secondary"/><path class="gw6bgvmzh primary"/></g>`,
		"fallback": "iconaut:ambulance-duotone",
	});
}

export default Component;
