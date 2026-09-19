import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/je167lzqy.css';
import '../../css/w/wlnpeebjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="je167lzqy"/><path clip-rule="evenodd" class="wlnpeebjx"/></g>`,
		"fallback": "gg:comment",
	});
}

export default Component;
