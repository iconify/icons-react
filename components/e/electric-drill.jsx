import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lu8ljbbxs.css';
import '../../css/f/faid8ja0u.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lu8ljbbxs"/><path class="faid8ja0u"/><path class="izth8wb4y"/></g>`,
		"fallback": "icon-park-outline:electric-drill",
	});
}

export default Component;
