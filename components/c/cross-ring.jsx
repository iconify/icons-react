import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x55ohocke.css';
import '../../css/s/sluqj5bks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x55ohocke"/><path class="sluqj5bks"/></g>`,
		"fallback": "icon-park-solid:cross-ring",
	});
}

export default Component;
