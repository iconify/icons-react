import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/u/un_-d-b8d.css';
import '../../css/y/ytpuc2b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path clip-rule="evenodd" class="un_-d-b8d"/><path clip-rule="evenodd" class="ytpuc2b1k"/></g>`,
		"fallback": "solar:chat-square-quote-bold-duotone",
	});
}

export default Component;
