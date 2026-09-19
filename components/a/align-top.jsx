import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pi2aatppd.css';
import '../../css/y/y7o7wybuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="pi2aatppd"/><path class="y7o7wybuc"/></g>`,
		"fallback": "icon-park-outline:align-top",
	});
}

export default Component;
