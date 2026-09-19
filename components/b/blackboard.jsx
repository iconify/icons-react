import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d64vcpb0m.css';
import '../../css/s/swzcsov6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="d64vcpb0m"/><path class="swzcsov6m"/></g>`,
		"fallback": "icon-park-outline:blackboard",
	});
}

export default Component;
