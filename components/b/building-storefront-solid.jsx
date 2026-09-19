import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alfvix6qq.css';
import '../../css/b/bx6jy-vde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="alfvix6qq"/><path clip-rule="evenodd" class="bx6jy-vde"/></g>`,
		"fallback": "heroicons:building-storefront-solid",
	});
}

export default Component;
