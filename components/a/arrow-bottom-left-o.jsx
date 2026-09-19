import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj6r_8rha.css';
import '../../css/p/pil0xabkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aj6r_8rha"/><path clip-rule="evenodd" class="pil0xabkh"/></g>`,
		"fallback": "gg:arrow-bottom-left-o",
	});
}

export default Component;
