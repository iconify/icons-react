import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlvk2oaob.css';
import '../../css/e/e09-mrbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qlvk2oaob"/><path class="e09-mrbzu"/></g>`,
		"fallback": "solar:gallery-check-outline",
	});
}

export default Component;
