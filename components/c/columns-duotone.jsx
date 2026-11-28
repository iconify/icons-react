import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izqyjzbqz.css';
import '../../css/w/w4zmx8mxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="izqyjzbqz secondary"/><path class="primary w4zmx8mxi"/></g>`,
		"fallback": "iconaut:columns-duotone",
	});
}

export default Component;
