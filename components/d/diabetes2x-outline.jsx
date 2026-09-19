import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qdi-letsc.css';
import '../../css/u/u4-iasbfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qdi-letsc"/><path class="u4-iasbfc"/></g>`,
		"fallback": "healthicons:diabetes2x-outline",
	});
}

export default Component;
