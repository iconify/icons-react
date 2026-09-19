import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/on1kopb6o.css';
import '../../css/s/ss5im0bvc.css';
import '../../css/x/xkitpccfs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="on1kopb6o"/><path class="ss5im0bvc"/><path class="xkitpccfs"/></g>`,
		"fallback": "icon-park-solid:change-date-sort",
	});
}

export default Component;
