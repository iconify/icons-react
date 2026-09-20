import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vzo3ypbps.css';
import '../../css/x/xkfkckotm.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="vzo3ypbps"/><path class="xkfkckotm"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/></g>`,
		"fallback": "solar:alarm-turn-off-linear",
	});
}

export default Component;
