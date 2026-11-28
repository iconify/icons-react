import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgp3_qbib.css';
import '../../css/t/tb8e62ahy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lgp3_qbib secondary"/><path class="primary tb8e62ahy"/></g>`,
		"fallback": "iconaut:align-horizontal-space-between-duotone",
	});
}

export default Component;
