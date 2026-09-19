import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/m6u5wybjd.css';
import '../../css/j/j37pifb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="m6u5wybjd"/><path class="j37pifb9j"/></g>`,
		"fallback": "icon-park-outline:endocrine",
	});
}

export default Component;
