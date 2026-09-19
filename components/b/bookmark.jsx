import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wlznzl_gi.css';
import '../../css/r/r_2iz0sxd.css';
import '../../css/u/uoq_q1lqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wlznzl_gi"/><path clip-rule="evenodd" class="r_2iz0sxd"/><path class="uoq_q1lqx"/></g>`,
		"fallback": "icon-park-outline:bookmark",
	});
}

export default Component;
