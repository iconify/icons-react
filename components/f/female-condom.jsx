import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cajm6-_qh.css';
import '../../css/b/bqkgiyjlb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cajm6-_qh"/><path clip-rule="evenodd" class="bqkgiyjlb"/></g>`,
		"fallback": "healthicons:female-condom",
	});
}

export default Component;
