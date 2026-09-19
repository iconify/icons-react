import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hk0u6n4pq.css';
import '../../css/z/zt8glxhsg.css';
import '../../css/l/lpo9v9cnc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hk0u6n4pq"/><path clip-rule="evenodd" class="zt8glxhsg"/><path class="lpo9v9cnc"/></g>`,
		"fallback": "icon-park-outline:calendar-thirty-two",
	});
}

export default Component;
