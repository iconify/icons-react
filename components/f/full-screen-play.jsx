import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zqp5lnbil.css';
import '../../css/n/nsxt0ob6z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zqp5lnbil"/><path class="nsxt0ob6z"/></g>`,
		"fallback": "icon-park-outline:full-screen-play",
	});
}

export default Component;
