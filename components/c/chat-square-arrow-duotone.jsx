import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2s8e_brl.css';
import '../../css/x/xzkimo7ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2s8e_brl"/><path clip-rule="evenodd" class="xzkimo7ce"/></g>`,
		"fallback": "reicon:chat-square-arrow-duotone",
	});
}

export default Component;
