import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bzk2ng9yc.css';
import '../../css/y/yxe5_4brs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bzk2ng9yc"/><path class="yxe5_4brs"/></g>`,
		"fallback": "icon-park-outline:chart-ring",
	});
}

export default Component;
