import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q6s53_b3x.css';
import '../../css/b/bqvh2xbzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q6s53_b3x"/><path class="bqvh2xbzc"/></g>`,
		"fallback": "icon-park-outline:branch",
	});
}

export default Component;
