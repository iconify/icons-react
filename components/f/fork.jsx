import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lmtzawoqi.css';
import '../../css/p/pfos4ebhf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="lmtzawoqi"/><path class="pfos4ebhf"/></g>`,
		"fallback": "icon-park-solid:fork",
	});
}

export default Component;
