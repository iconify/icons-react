import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8zvn4tvb.css';
import '../../css/e/eitysgtmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8zvn4tvb"/><path clip-rule="evenodd" class="eitysgtmd"/></g>`,
		"fallback": "solar:calendar-mark-bold",
	});
}

export default Component;
