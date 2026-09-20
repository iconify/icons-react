import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so7bymbyw.css';
import '../../css/z/zuool-b8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="so7bymbyw"/><path clip-rule="evenodd" class="zuool-b8s"/></g>`,
		"fallback": "solar:crown-line-outline",
	});
}

export default Component;
