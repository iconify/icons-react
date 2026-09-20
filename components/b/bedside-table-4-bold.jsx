import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlojlsblx.css';
import '../../css/n/nu4o-acnp.css';
import '../../css/w/wxzn3vsps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xlojlsblx"/><path class="nu4o-acnp"/><path clip-rule="evenodd" class="wxzn3vsps"/></g>`,
		"fallback": "solar:bedside-table-4-bold",
	});
}

export default Component;
