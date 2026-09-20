import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mgq3aob1q.css';
import '../../css/x/x4vrr2byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mgq3aob1q"/><path class="x4vrr2byd"/></g>`,
		"fallback": "solar:forward-right-line-duotone",
	});
}

export default Component;
