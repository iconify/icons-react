import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/ph89ajpvx.css';
import '../../css/a/a2dqemwrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ph89ajpvx"/><path class="a2dqemwrc"/></g>`,
		"fallback": "icon-park-solid:contrast-view",
	});
}

export default Component;
