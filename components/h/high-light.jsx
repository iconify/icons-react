import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/w5soi7ikq.css';
import '../../css/o/o-hsaebns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="w5soi7ikq"/><path class="o-hsaebns"/></g>`,
		"fallback": "icon-park-outline:high-light",
	});
}

export default Component;
