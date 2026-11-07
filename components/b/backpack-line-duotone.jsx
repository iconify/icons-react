import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/prxmevb8y.css';
import '../../css/q/qvktbkbmj.css';
import '../../css/x/xmrhfhb4m.css';
import '../../css/v/v2s8-khye.css';
import '../../css/i/ij65dz6ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="prxmevb8y"/><path class="qvktbkbmj"/><path class="xmrhfhb4m"/><path class="v2s8-khye"/><path class="ij65dz6ik"/></g>`,
		"fallback": "solar:backpack-line-duotone",
	});
}

export default Component;
