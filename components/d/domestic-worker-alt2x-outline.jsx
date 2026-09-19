import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a545g_bck.css';
import '../../css/e/e5ubdwl-r.css';
import '../../css/j/js13rifac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a545g_bck"/><path class="e5ubdwl-r"/><path clip-rule="evenodd" class="js13rifac"/></g>`,
		"fallback": "healthicons:domestic-worker-alt2x-outline",
	});
}

export default Component;
