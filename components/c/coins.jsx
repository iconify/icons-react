import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gy66vxd3l.css';
import '../../css/q/q1tfifwlw.css';
import '../../css/b/bwm3foqlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gy66vxd3l"/><path class="q1tfifwlw"/><path class="bwm3foqlw"/></g>`,
		"fallback": "healthicons:coins",
	});
}

export default Component;
