import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nnp6pzbnt.css';
import '../../css/z/zersuh-bf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nnp6pzbnt"/><path class="zersuh-bf"/></g>`,
		"fallback": "icon-park-outline:bezier-curve",
	});
}

export default Component;
