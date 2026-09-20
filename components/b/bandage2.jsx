import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qwqv6nbos.css';
import '../../css/w/wx595abae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qwqv6nbos"/><path clip-rule="evenodd" class="wx595abae"/></g>`,
		"fallback": "reicon:bandage2",
	});
}

export default Component;
