import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/ngjdhfbqk.css';
import '../../css/b/bqvh2xbzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ngjdhfbqk"/><path class="bqvh2xbzc"/></g>`,
		"fallback": "icon-park-solid:branch",
	});
}

export default Component;
