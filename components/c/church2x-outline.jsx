import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8t5mze7v.css';
import '../../css/l/lp_kmkbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y8t5mze7v"/><path class="lp_kmkbpu"/></g>`,
		"fallback": "healthicons:church2x-outline",
	});
}

export default Component;
