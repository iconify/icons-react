import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/ku2zr4jsc.css';
import '../../css/m/mdlrplbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ku2zr4jsc"/><path class="mdlrplbcn"/></g>`,
		"fallback": "icon-park-outline:calendar",
	});
}

export default Component;
