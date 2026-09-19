import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tp8cfdceb.css';
import '../../css/w/wsbzt7bwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tp8cfdceb"/><path class="wsbzt7bwh"/></g>`,
		"fallback": "icon-park-solid:align-horizontally",
	});
}

export default Component;
