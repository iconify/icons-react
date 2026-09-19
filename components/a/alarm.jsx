import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dlq_zoczk.css';
import '../../css/k/kdx-xsbhx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dlq_zoczk"/><path class="kdx-xsbhx"/></g>`,
		"fallback": "icon-park-solid:alarm",
	});
}

export default Component;
