import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za2-1rt4d.css';
import '../../css/d/dao0kzbfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="za2-1rt4d"/><path class="dao0kzbfh"/></g>`,
		"fallback": "reicon:chat-dots",
	});
}

export default Component;
