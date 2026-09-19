import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/l5kz4ccrj.css';
import '../../css/p/pfos4ebhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="l5kz4ccrj"/><path class="pfos4ebhf"/></g>`,
		"fallback": "icon-park-outline:fork",
	});
}

export default Component;
