import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k57943a-c.css';
import '../../css/h/ht6mdpbgs.css';
import '../../css/j/jengioewr.css';
import '../../css/w/wuz82_-er.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k57943a-c"/><path class="ht6mdpbgs"/><path class="jengioewr"/><path class="wuz82_-er"/></g>`,
		"fallback": "solar:cup-hot-broken",
	});
}

export default Component;
