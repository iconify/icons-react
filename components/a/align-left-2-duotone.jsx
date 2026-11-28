import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/onlqvbbra.css';
import '../../css/v/v__lambgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="onlqvbbra secondary"/><path class="primary v__lambgt"/></g>`,
		"fallback": "iconaut:align-left-2-duotone",
	});
}

export default Component;
