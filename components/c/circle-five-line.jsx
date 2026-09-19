import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/f_j-afbkf.css';
import '../../css/f/fsbjilb4d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="f_j-afbkf"/><path class="fsbjilb4d"/></g>`,
		"fallback": "icon-park-outline:circle-five-line",
	});
}

export default Component;
