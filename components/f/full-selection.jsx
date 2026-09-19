import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xrancerjs.css';
import '../../css/a/azrk7m73e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xrancerjs"/><path class="azrk7m73e"/></g>`,
		"fallback": "icon-park-outline:full-selection",
	});
}

export default Component;
