import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntvknhblf.css';
import '../../css/t/ttt87jbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ntvknhblf"/><path class="ttt87jbkz"/></g>`,
		"fallback": "reicon:bell-off2",
	});
}

export default Component;
