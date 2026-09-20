import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pdcao9bkm.css';
import '../../css/b/bi2xhac7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pdcao9bkm"/><path class="bi2xhac7n"/></g>`,
		"fallback": "solar:exclamation-mark-outline",
	});
}

export default Component;
