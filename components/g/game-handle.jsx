import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/as714b-9n.css';
import '../../css/i/iv0tfobzy.css';
import '../../css/n/nahw1dvtt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="as714b-9n"/><path class="iv0tfobzy"/><path class="nahw1dvtt"/></g>`,
		"fallback": "icon-park-outline:game-handle",
	});
}

export default Component;
