import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/q/q4hgcgrmu.css';
import '../../css/d/dlx2xvbhm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="q4hgcgrmu"/><path class="dlx2xvbhm"/></g>`,
		"fallback": "icon-park-outline:cones",
	});
}

export default Component;
