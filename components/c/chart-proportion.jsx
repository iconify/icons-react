import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kb3w1gazs.css';
import '../../css/v/vib4eub8n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="kb3w1gazs"/><path class="vib4eub8n"/></g>`,
		"fallback": "icon-park-outline:chart-proportion",
	});
}

export default Component;
