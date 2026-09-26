import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pn9wt9l8f.css';
import '../../css/s/sf3kepnyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pn9wt9l8f"/><path class="sf3kepnyc"/></g>`,
		"fallback": "solar:chevrons-up-down-outline",
	});
}

export default Component;
