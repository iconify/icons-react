import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgf4y2vjv.css';
import '../../css/e/e8zw_nbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgf4y2vjv"/><path class="e8zw_nbzb"/></g>`,
		"fallback": "coolicons:currency-pound-bulk-round",
	});
}

export default Component;
