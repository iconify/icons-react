import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/omhvxckds.css';
import '../../css/w/woj2ebxce.css';
import '../../css/w/wuumjo_7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="omhvxckds"/><path class="woj2ebxce"/><path class="wuumjo_7q"/></g>`,
		"fallback": "solar:copy-close-line-duotone",
	});
}

export default Component;
