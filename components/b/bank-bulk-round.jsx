import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m4t4_yb1z.css';
import '../../css/c/cjxs-8b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m4t4_yb1z"/><path class="cjxs-8b7m"/></g>`,
		"fallback": "coolicons:bank-bulk-round",
	});
}

export default Component;
