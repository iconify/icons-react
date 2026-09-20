import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/my55gzyfh.css';
import '../../css/r/rxxjmsbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="my55gzyfh"/><path class="rxxjmsbsr"/></g>`,
		"fallback": "solar:align-horizontal-spacing-bold",
	});
}

export default Component;
