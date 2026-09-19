import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2inmo5zg.css';
import '../../css/b/bc7uu5x5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2inmo5zg"/><path clip-rule="evenodd" class="bc7uu5x5e"/></g>`,
		"fallback": "healthicons:disinfecting-wipes",
	});
}

export default Component;
