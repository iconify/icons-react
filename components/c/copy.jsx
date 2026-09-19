import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gr1__7lov.css';
import '../../css/q/ql3pxnb7t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gr1__7lov"/><path class="ql3pxnb7t"/></g>`,
		"fallback": "icon-park-outline:copy",
	});
}

export default Component;
