import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuxogyeok.css';
import '../../css/z/zgrfc0b6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuxogyeok"/><path class="zgrfc0b6p"/></g>`,
		"fallback": "heroicons-solid:clipboard-copy",
	});
}

export default Component;
