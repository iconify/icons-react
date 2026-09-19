import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yilqk1bly.css';
import '../../css/n/ntbc2rb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yilqk1bly"/><path class="ntbc2rb1k"/></g>`,
		"fallback": "flowbite:beer-mug-empty-solid",
	});
}

export default Component;
