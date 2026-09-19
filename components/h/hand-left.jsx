import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n4u75ycwq.css';
import '../../css/y/yd5ssobgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="n4u75ycwq"/><path clip-rule="evenodd" class="yd5ssobgf"/></g>`,
		"fallback": "icon-park-outline:hand-left",
	});
}

export default Component;
