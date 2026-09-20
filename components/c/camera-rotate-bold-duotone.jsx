import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/u/uqh7e4boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mw2j0bfon"/><path class="uqh7e4boo"/></g>`,
		"fallback": "solar:camera-rotate-bold-duotone",
	});
}

export default Component;
