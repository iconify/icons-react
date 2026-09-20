import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h-9ztu5en.css';
import '../../css/p/p8mddu_av.css';
import '../../css/o/og2g1wbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h-9ztu5en"/><path class="p8mddu_av"/><path class="og2g1wbux"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-typing-2",
	});
}

export default Component;
