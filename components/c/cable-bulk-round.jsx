import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/paq28ebve.css';
import '../../css/u/uowxp16rl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="paq28ebve"/><path class="uowxp16rl"/></g>`,
		"fallback": "coolicons:cable-bulk-round",
	});
}

export default Component;
