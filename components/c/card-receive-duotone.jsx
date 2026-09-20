import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9im77xci.css';
import '../../css/p/p0til8bxh.css';
import '../../css/z/zjapeywkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t9im77xci"/><path clip-rule="evenodd" class="p0til8bxh"/><path class="zjapeywkt"/></g>`,
		"fallback": "reicon:card-receive-duotone",
	});
}

export default Component;
