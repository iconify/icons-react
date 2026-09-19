import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ungq8mb9a.css';
import '../../css/t/tsg2te_ym.css';
import '../../css/h/hd1zh1qcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ungq8mb9a"/><path class="tsg2te_ym"/><path clip-rule="evenodd" class="hd1zh1qcr"/></g>`,
		"fallback": "healthicons:agriculture-worker-alt-outline",
	});
}

export default Component;
