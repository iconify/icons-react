import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pa4vnsmcu.css';
import '../../css/f/fylt460yu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pa4vnsmcu"/><path clip-rule="evenodd" class="fylt460yu"/></g>`,
		"fallback": "heroicons-solid:document-search",
	});
}

export default Component;
