import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4rtn1bsp.css';
import '../../css/e/eu6zrccpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4rtn1bsp"/><path class="eu6zrccpf"/></g>`,
		"fallback": "majesticons:folder-remove-line",
	});
}

export default Component;
