import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nd-3gubon.css';
import '../../css/x/x43s2zn6y.css';
import '../../css/p/pfllnjb4h.css';
import '../../css/d/dul6eto5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="nd-3gubon"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/><path class="dul6eto5z"/></g>`,
		"fallback": "solar:alarm-sleep-line-duotone",
	});
}

export default Component;
