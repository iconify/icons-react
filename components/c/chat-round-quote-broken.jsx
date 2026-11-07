import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mp18y-ypb.css';
import '../../css/q/qw0l0qbai.css';
import '../../css/z/z3dm9fb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mp18y-ypb"/><path class="qw0l0qbai"/><path class="z3dm9fb4z"/></g>`,
		"fallback": "solar:chat-round-quote-broken",
	});
}

export default Component;
