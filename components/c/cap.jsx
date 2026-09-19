import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p-040lb2l.css';
import '../../css/y/ysln62bss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p-040lb2l"/><path clip-rule="evenodd" class="ysln62bss"/></g>`,
		"fallback": "gg:cap",
	});
}

export default Component;
