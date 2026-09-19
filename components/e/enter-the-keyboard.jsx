import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o7c2cxbly.css';
import '../../css/w/w-46dcbay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="o7c2cxbly"/><path class="w-46dcbay"/></g>`,
		"fallback": "icon-park-outline:enter-the-keyboard",
	});
}

export default Component;
