import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/s/sh6lbgc5j.css';
import '../../css/m/mem1epv9o.css';
import '../../css/g/gb8wnryjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="sh6lbgc5j"/><path class="mem1epv9o"/><path class="gb8wnryjx"/></g>`,
		"fallback": "icon-park:canned-fruit",
	});
}

export default Component;
