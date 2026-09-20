import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_q02xbac.css';
import '../../css/y/yw-7am4ws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="y_q02xbac"/><path vector-effect="non-scaling-stroke" class="yw-7am4ws"/></g>`,
		"fallback": "wordpress:bell-unread",
	});
}

export default Component;
