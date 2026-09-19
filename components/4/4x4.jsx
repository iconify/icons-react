import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odcf3pbeu.css';
import '../../css/g/g_1u1u91j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="odcf3pbeu"/><path class="g_1u1u91j"/></g>`,
		"fallback": "healthicons:4x4",
	});
}

export default Component;
