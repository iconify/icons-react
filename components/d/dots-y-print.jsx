import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i8g6xo_pu.css';
import '../../css/t/tfng0xpse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i8g6xo_pu"/><path class="tfng0xpse"/></g>`,
		"fallback": "pepicons:dots-y-print",
	});
}

export default Component;
