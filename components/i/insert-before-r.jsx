import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p04435bli.css';
import '../../css/k/kqx07himh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p04435bli"/><path clip-rule="evenodd" class="kqx07himh"/></g>`,
		"fallback": "gg:insert-before-r",
	});
}

export default Component;
