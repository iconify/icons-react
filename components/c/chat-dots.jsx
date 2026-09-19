import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hk4xqac0j.css';
import '../../css/q/qbow6m43x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hk4xqac0j"/><path class="qbow6m43x"/></g>`,
		"fallback": "bi:chat-dots",
	});
}

export default Component;
