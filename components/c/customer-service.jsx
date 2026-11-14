import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e3l-fmy7f.css';
import '../../css/w/wsf23jbee.css';
import '../../css/w/wdgb1gh3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e3l-fmy7f"/><path class="wsf23jbee"/><path class="wdgb1gh3j"/></g>`,
		"fallback": "hugeicons:customer-service",
	});
}

export default Component;
