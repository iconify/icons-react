import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/qcld7mbqr.css';
import '../../css/s/s13dhxbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="qcld7mbqr"/><path class="s13dhxbgk"/></g>`,
		"fallback": "icon-park-outline:circle-two-line",
	});
}

export default Component;
