import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zt7_6-8vu.css';
import '../../css/e/ers2p075t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zt7_6-8vu"/><path class="ers2p075t"/></g>`,
		"fallback": "icon-park-outline:english-mustache",
	});
}

export default Component;
