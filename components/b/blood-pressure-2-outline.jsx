import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dlw6o4bir.css';
import '../../css/g/gcretgl0z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dlw6o4bir"/><path clip-rule="evenodd" class="gcretgl0z"/></g>`,
		"fallback": "healthicons:blood-pressure-2-outline",
	});
}

export default Component;
