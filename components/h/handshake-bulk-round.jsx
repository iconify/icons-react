import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ek5rg2emf.css';
import '../../css/x/xtjxpq98z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ek5rg2emf"/><path class="xtjxpq98z"/></g>`,
		"fallback": "coolicons:handshake-bulk-round",
	});
}

export default Component;
