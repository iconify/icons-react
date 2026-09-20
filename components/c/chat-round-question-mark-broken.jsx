import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ad99r3bgz.css';
import '../../css/e/emj5448xa.css';
import '../../css/z/zn-yurbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ad99r3bgz"/><path class="emj5448xa"/><path class="zn-yurbog"/></g>`,
		"fallback": "solar:chat-round-question-mark-broken",
	});
}

export default Component;
