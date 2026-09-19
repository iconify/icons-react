import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhqd1m6pf.css';
import '../../css/k/k295mhbqp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhqd1m6pf"/><path class="k295mhbqp"/></g>`,
		"fallback": "bi:device-ssd",
	});
}

export default Component;
