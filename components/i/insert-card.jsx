import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nvjxntb_m.css';
import '../../css/j/jxo-rzbkb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nvjxntb_m"/><path class="jxo-rzbkb"/></g>`,
		"fallback": "icon-park-outline:insert-card",
	});
}

export default Component;
