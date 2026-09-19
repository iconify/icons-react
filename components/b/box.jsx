import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/ry177p3-m.css';
import '../../css/i/iog5bvc2b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="ry177p3-m"/><path class="iog5bvc2b"/></g>`,
		"fallback": "icon-park-outline:box",
	});
}

export default Component;
