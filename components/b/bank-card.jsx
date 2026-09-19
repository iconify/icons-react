import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/itduwablw.css';
import '../../css/x/x_83sd0yc.css';
import '../../css/v/v1msn87zh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="itduwablw"/><path class="x_83sd0yc"/><path class="v1msn87zh"/></g>`,
		"fallback": "icon-park-outline:bank-card",
	});
}

export default Component;
