import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ut31b35ci.css';
import '../../css/b/bbto15hdo.css';
import '../../css/i/inol7c_ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ut31b35ci"/><path class="bbto15hdo"/><path class="inol7c_ew"/></g>`,
		"fallback": "solar:call-chat-broken",
	});
}

export default Component;
