import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q_qkzmbug.css';
import '../../css/g/gpdtabc8f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q_qkzmbug"/><path class="gpdtabc8f"/></g>`,
		"fallback": "healthicons:chart-cured-increasing",
	});
}

export default Component;
