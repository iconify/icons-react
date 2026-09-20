import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1c-mrbex.css';
import '../../css/i/iv8ywkbqx.css';
import '../../css/t/tmindebzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n1c-mrbex"/><path class="iv8ywkbqx"/><path clip-rule="evenodd" class="tmindebzt"/></g>`,
		"fallback": "solar:folder-lock-bold",
	});
}

export default Component;
