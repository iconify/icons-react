import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hahzwslpv.css';
import '../../css/w/woj2ebxce.css';
import '../../css/g/g2e37sboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hahzwslpv"/><path class="woj2ebxce"/><path class="g2e37sboy"/></g>`,
		"fallback": "solar:copy-minus-line-duotone",
	});
}

export default Component;
