import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9qg14b8g.css';
import '../../css/s/sw81iob5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9qg14b8g"/><path class="sw81iob5m"/></g>`,
		"fallback": "flowbite:icecream-alt-solid",
	});
}

export default Component;
