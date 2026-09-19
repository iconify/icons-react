import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/it-6pnb9s.css';
import '../../css/h/h3688zf_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="it-6pnb9s"/><path class="h3688zf_b"/></g>`,
		"fallback": "icon-park-solid:connection-point-two",
	});
}

export default Component;
