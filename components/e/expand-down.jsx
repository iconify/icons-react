import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g8poy-bjj.css';
import '../../css/k/kx53vyikr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g8poy-bjj"/><path class="kx53vyikr"/></g>`,
		"fallback": "icon-park-outline:expand-down",
	});
}

export default Component;
