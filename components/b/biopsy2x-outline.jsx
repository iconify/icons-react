import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zgro9p05h.css';
import '../../css/o/or5oqnxmr.css';
import '../../css/f/ffkv7ob9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zgro9p05h"/><path clip-rule="evenodd" class="or5oqnxmr"/><path class="ffkv7ob9p"/></g>`,
		"fallback": "healthicons:biopsy2x-outline",
	});
}

export default Component;
