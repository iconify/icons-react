import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-5wrl0vr.css';
import '../../css/p/popaz21gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-5wrl0vr"/><path class="popaz21gp"/></g>`,
		"fallback": "coolicons:cloud-off-bulk-round",
	});
}

export default Component;
