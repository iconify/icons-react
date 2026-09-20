import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xjes2kbti.css';
import '../../css/y/yzbzu_bof.css';
import '../../css/e/ev6y-cbzf.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xjes2kbti"/><path class="yzbzu_bof"/><path class="ev6y-cbzf"/><path class="ejdkgccas"/></g>`,
		"fallback": "solar:chat-square-code-broken",
	});
}

export default Component;
