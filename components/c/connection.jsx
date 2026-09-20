import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mzxb4dbru.css';
import '../../css/m/m2x0-riqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="mzxb4dbru"/><path class="m2x0-riqq"/></g>`,
		"fallback": "wordpress:connection",
	});
}

export default Component;
