import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x6_0p-lou.css';
import '../../css/x/xvbhu7r3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x6_0p-lou"/><path class="xvbhu7r3a"/></g>`,
		"fallback": "solar:global-line-duotone",
	});
}

export default Component;
