import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epei0bcwt.css';
import '../../css/c/cprgajb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epei0bcwt"/><path class="cprgajb8g"/></g>`,
		"fallback": "coolicons:currency-rupee-bulk-round",
	});
}

export default Component;
