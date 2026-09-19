import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/me56_79sn.css';
import '../../css/p/pnx-zac0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="me56_79sn"/><path class="pnx-zac0m"/></g>`,
		"fallback": "icon-park-outline:file-excel",
	});
}

export default Component;
