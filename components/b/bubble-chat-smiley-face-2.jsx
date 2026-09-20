import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5a5yrzvq.css';
import '../../css/j/jutld8uev.css';
import '../../css/w/ws2miw3gm.css';
import '../../css/b/blhfju6_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5a5yrzvq"/><path class="jutld8uev"/><path class="ws2miw3gm"/><path class="blhfju6_j"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-smiley-face-2",
	});
}

export default Component;
