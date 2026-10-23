import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wh263_jsa.css';
import '../../css/m/mgtt24brm.css';
import '../../css/o/ohvfq_b9q.css';
import '../../css/w/wb5nwwbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wh263_jsa"/><path class="mgtt24brm"/><path class="ohvfq_b9q"/><path class="wb5nwwbth"/></g>`,
		"fallback": "andrsrxn:desert",
	});
}

export default Component;
