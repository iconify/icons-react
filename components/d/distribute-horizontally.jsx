import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/ni7lzb-dh.css';
import '../../css/i/iulnlabex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ni7lzb-dh"/><path class="iulnlabex"/></g>`,
		"fallback": "icon-park-outline:distribute-horizontally",
	});
}

export default Component;
