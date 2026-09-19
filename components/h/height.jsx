import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6x4ow53z.css';
import '../../css/l/lei_11jjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6x4ow53z"/><path class="lei_11jjg"/></g>`,
		"fallback": "healthicons:height",
	});
}

export default Component;
