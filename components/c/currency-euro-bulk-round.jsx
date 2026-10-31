import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxkwt7b5y.css';
import '../../css/w/wdeud0bza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxkwt7b5y"/><path class="wdeud0bza"/></g>`,
		"fallback": "coolicons:currency-euro-bulk-round",
	});
}

export default Component;
