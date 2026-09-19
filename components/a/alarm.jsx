import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xzqt0v_yd.css';
import '../../css/k/kdx-xsbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xzqt0v_yd"/><path class="kdx-xsbhx"/></g>`,
		"fallback": "icon-park-outline:alarm",
	});
}

export default Component;
