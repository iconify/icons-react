import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k2j8b1jba.css';
import '../../css/a/aykj1mb7m.css';
import '../../css/i/ik07xqb4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k2j8b1jba"/><path class="aykj1mb7m"/><path class="ik07xqb4l"/></g>`,
		"fallback": "icon-park-outline:guide-board",
	});
}

export default Component;
