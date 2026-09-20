import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3zcb7bmk.css';
import '../../css/j/jnl18abrk.css';
import '../../css/e/ej7kdi06a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r3zcb7bmk"/><path class="jnl18abrk"/><path clip-rule="evenodd" class="ej7kdi06a"/></g>`,
		"fallback": "solar:chat-square-warning-outline",
	});
}

export default Component;
