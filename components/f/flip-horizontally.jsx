import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wsbzt7bwh.css';
import '../../css/w/ws4_uh05r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wsbzt7bwh"/><path class="ws4_uh05r"/></g>`,
		"fallback": "icon-park-outline:flip-horizontally",
	});
}

export default Component;
