import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbplypbco.css';
import '../../css/g/g_x97vi4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qbplypbco"/><path clip-rule="evenodd" class="g_x97vi4w"/></g>`,
		"fallback": "healthicons:disinfecting-wipes-outline",
	});
}

export default Component;
