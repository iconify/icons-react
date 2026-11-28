import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzseemp9f.css';
import '../../css/g/g_em71s7u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wzseemp9f"/><path class="g_em71s7u"/></g>`,
		"fallback": "pullo:chat-question-duotone",
	});
}

export default Component;
