import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wqap7xb2p.css';
import '../../css/b/bf6l0l08b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wqap7xb2p"/><path class="bf6l0l08b"/></g>`,
		"fallback": "healthicons:cold-chain",
	});
}

export default Component;
