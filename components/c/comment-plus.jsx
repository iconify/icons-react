import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etm_13gxh.css';
import '../../css/j/jvc0x--az.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etm_13gxh"/><path clip-rule="evenodd" class="jvc0x--az"/></g>`,
		"fallback": "reicon:comment-plus",
	});
}

export default Component;
