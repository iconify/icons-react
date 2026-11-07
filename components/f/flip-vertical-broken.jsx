import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j28ky6bwi.css';
import '../../css/i/iycceebvi.css';
import '../../css/r/rtt-63oek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j28ky6bwi"/><path class="iycceebvi"/><path class="rtt-63oek"/></g>`,
		"fallback": "solar:flip-vertical-broken",
	});
}

export default Component;
