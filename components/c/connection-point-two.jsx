import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/it-6pnb9s.css';
import '../../css/q/qcld7mbqr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="it-6pnb9s"/><path class="qcld7mbqr"/></g>`,
		"fallback": "icon-park-outline:connection-point-two",
	});
}

export default Component;
