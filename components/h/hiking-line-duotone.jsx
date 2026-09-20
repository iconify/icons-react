import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lgksoiblo.css';
import '../../css/p/p397vciec.css';
import '../../css/r/rt-a0zb8h.css';
import '../../css/c/cu7xy9b9y.css';
import '../../css/t/t1nlz8bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lgksoiblo"/><path class="p397vciec"/><path class="rt-a0zb8h"/><path class="cu7xy9b9y"/><path class="t1nlz8bqy"/></g>`,
		"fallback": "solar:hiking-line-duotone",
	});
}

export default Component;
