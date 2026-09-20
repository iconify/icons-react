import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mi89__20n.css';
import '../../css/a/ad99r3bgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mi89__20n"/><path class="ad99r3bgz"/></g>`,
		"fallback": "solar:chat-round-video-broken",
	});
}

export default Component;
