import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/s7vus8b6x.css';
import '../../css/x/x1tpzjbth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="s7vus8b6x"/><path class="x1tpzjbth"/></g>`,
		"fallback": "icon-park-outline:inclusive-gateway",
	});
}

export default Component;
