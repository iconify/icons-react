import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n_z5md42q.css';
import '../../css/j/j7j-p3g_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="n_z5md42q"/><path class="j7j-p3g_y"/></g>`,
		"fallback": "icon-park-outline:harm",
	});
}

export default Component;
