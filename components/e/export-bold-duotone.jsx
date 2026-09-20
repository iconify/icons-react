import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xn75ilbko.css';
import '../../css/d/dzo60ib4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xn75ilbko"/><path clip-rule="evenodd" class="dzo60ib4y"/></g>`,
		"fallback": "solar:export-bold-duotone",
	});
}

export default Component;
