import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2jxbkb8j.css';
import '../../css/d/dnyemccis.css';
import '../../css/z/zjapeywkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2jxbkb8j"/><path clip-rule="evenodd" class="dnyemccis"/><path class="zjapeywkt"/></g>`,
		"fallback": "reicon:card-send-duotone",
	});
}

export default Component;
