import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjpq5fj1s.css';
import '../../css/b/bf6l0l08b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xjpq5fj1s"/><path class="bf6l0l08b"/></g>`,
		"fallback": "healthicons:cold-chain2x-outline",
	});
}

export default Component;
