import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bktxat4_i.css';
import '../../css/u/u3xcb0bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bktxat4_i"/><path clip-rule="evenodd" class="u3xcb0bsy"/></g>`,
		"fallback": "solar:archive-up-minimalistic-outline",
	});
}

export default Component;
