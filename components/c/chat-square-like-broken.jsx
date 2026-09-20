import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ay49rbbdp.css';
import '../../css/r/rc_eaccxy.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ay49rbbdp"/><path class="rc_eaccxy"/><path class="ejdkgccas"/></g>`,
		"fallback": "solar:chat-square-like-broken",
	});
}

export default Component;
