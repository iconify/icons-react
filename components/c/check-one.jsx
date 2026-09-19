import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qvwh-3bss.css';
import '../../css/h/h13c8cb6j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qvwh-3bss"/><path class="h13c8cb6j"/></g>`,
		"fallback": "icon-park-outline:check-one",
	});
}

export default Component;
