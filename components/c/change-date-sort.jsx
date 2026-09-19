import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/on1kopb6o.css';
import '../../css/i/i1jcq5b5k.css';
import '../../css/x/xkitpccfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="on1kopb6o"/><path class="i1jcq5b5k"/><path class="xkitpccfs"/></g>`,
		"fallback": "icon-park-outline:change-date-sort",
	});
}

export default Component;
