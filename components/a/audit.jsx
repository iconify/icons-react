import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j0wb1fz-x.css';
import '../../css/f/f1r26vbpu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j0wb1fz-x"/><path class="f1r26vbpu"/></g>`,
		"fallback": "icon-park-outline:audit",
	});
}

export default Component;
