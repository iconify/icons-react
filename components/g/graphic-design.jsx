import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tghaxetbg.css';
import '../../css/f/fxkb1gbjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tghaxetbg"/><path class="fxkb1gbjg"/></g>`,
		"fallback": "icon-park-outline:graphic-design",
	});
}

export default Component;
