import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgg0-ubhy.css';
import '../../css/p/p03ed07tq.css';
import '../../css/w/wc9e0xbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hgg0-ubhy"/><path class="p03ed07tq"/><path class="wc9e0xbjt"/></g>`,
		"fallback": "solar:cup-paper-bold",
	});
}

export default Component;
