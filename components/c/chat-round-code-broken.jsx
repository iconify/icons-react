import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ad99r3bgz.css';
import '../../css/b/b_mqzbbbw.css';
import '../../css/j/jr3u5y25z.css';
import '../../css/j/joaj3f0ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ad99r3bgz"/><path class="b_mqzbbbw"/><path class="jr3u5y25z"/><path class="joaj3f0ng"/></g>`,
		"fallback": "solar:chat-round-code-broken",
	});
}

export default Component;
