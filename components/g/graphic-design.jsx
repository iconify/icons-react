import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tghaxetbg.css';
import '../../css/i/i9_e6tb7m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tghaxetbg"/><path class="i9_e6tb7m"/></g>`,
		"fallback": "icon-park-solid:graphic-design",
	});
}

export default Component;
