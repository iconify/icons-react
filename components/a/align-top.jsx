import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/o9oo2yb2d.css';
import '../../css/y/y7o7wybuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="o9oo2yb2d"/><path class="y7o7wybuc"/></g>`,
		"fallback": "icon-park-solid:align-top",
	});
}

export default Component;
