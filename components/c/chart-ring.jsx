import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bzk2ng9yc.css';
import '../../css/n/n7vt03o9b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bzk2ng9yc"/><path class="n7vt03o9b"/></g>`,
		"fallback": "icon-park-solid:chart-ring",
	});
}

export default Component;
