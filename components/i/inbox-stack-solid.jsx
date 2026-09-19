import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nluag3umx.css';
import '../../css/k/kc3f-acmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nluag3umx"/><path class="kc3f-acmi"/></g>`,
		"fallback": "heroicons:inbox-stack-solid",
	});
}

export default Component;
