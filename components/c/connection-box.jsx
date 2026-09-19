import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xw4eal6vv.css';
import '../../css/q/qd07iqr1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xw4eal6vv"/><path class="qd07iqr1b"/></g>`,
		"fallback": "icon-park-outline:connection-box",
	});
}

export default Component;
