import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bc0ft1biw.css';
import '../../css/e/eo5h4kbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bc0ft1biw"/><path class="eo5h4kbui"/></g>`,
		"fallback": "coolicons:building-1-bulk-round",
	});
}

export default Component;
