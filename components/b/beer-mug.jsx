import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wo-9vty1n.css';
import '../../css/x/xzxsc8bqh.css';
import '../../css/t/tvpmmp2in.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wo-9vty1n"/><path class="xzxsc8bqh"/><path class="tvpmmp2in"/></g>`,
		"fallback": "icon-park-outline:beer-mug",
	});
}

export default Component;
