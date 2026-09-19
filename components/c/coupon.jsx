import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/k6axtdbom.css';
import '../../css/x/x0pbd8bzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="k6axtdbom"/><path class="x0pbd8bzp"/></g>`,
		"fallback": "icon-park-outline:coupon",
	});
}

export default Component;
