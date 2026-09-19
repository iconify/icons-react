import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/y/ylwwzra0i.css';
import '../../css/r/rpdkp3b1y.css';
import '../../css/e/euvpd1bsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ylwwzra0i"/><path class="rpdkp3b1y"/><path class="euvpd1bsq"/></g>`,
		"fallback": "icon-park-outline:gift",
	});
}

export default Component;
