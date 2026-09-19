import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/haix9ib8v.css';
import '../../css/d/dcrt2swbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="haix9ib8v"/><path clip-rule="evenodd" class="dcrt2swbm"/></g>`,
		"fallback": "healthicons:chlamydia-outline",
	});
}

export default Component;
