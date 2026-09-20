import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5a5yrzvq.css';
import '../../css/j/jutld8uev.css';
import '../../css/i/inth4znzd.css';
import '../../css/c/ccyeiab0a.css';
import '../../css/v/vo4idybtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5a5yrzvq"/><path class="jutld8uev"/><path class="inth4znzd"/><path class="ccyeiab0a"/><path class="vo4idybtc"/></g>`,
		"fallback": "streamline-cyber-color:bubble-chat-typing-2",
	});
}

export default Component;
