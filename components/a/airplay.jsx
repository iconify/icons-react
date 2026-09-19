import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rkrcdf-xu.css';
import '../../css/o/o38s0tnjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rkrcdf-xu"/><path class="o38s0tnjw"/></g>`,
		"fallback": "icon-park-outline:airplay",
	});
}

export default Component;
