import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk285hb6g.css';
import '../../css/y/yoau83blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wk285hb6g"/><path class="yoau83blt"/></g>`,
		"fallback": "flowbite:api-key-outline",
	});
}

export default Component;
