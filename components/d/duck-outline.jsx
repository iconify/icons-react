import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s2pe5kl1o.css';
import '../../css/t/tf2f5sqyg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s2pe5kl1o"/><path clip-rule="evenodd" class="tf2f5sqyg"/></g>`,
		"fallback": "healthicons:duck-outline",
	});
}

export default Component;
