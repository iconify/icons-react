import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vvvbi4b4n.css';
import '../../css/k/k_y27wbkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vvvbi4b4n"/><path clip-rule="evenodd" class="k_y27wbkx"/></g>`,
		"fallback": "reicon:bell-off-filled",
	});
}

export default Component;
