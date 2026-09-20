import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvbhu7r3a.css';
import '../../css/m/m2m47owqp.css';
import '../../css/y/yirxaabex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvbhu7r3a"/><path class="m2m47owqp"/><path class="yirxaabex"/></g>`,
		"fallback": "solar:global-linear",
	});
}

export default Component;
