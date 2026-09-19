import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-tavvist.css';
import '../../css/q/qy742pb6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o-tavvist"/><path clip-rule="evenodd" class="qy742pb6d"/></g>`,
		"fallback": "healthicons:agriculture-worker-alt",
	});
}

export default Component;
