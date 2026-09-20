import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c65vfbbco.css';
import '../../css/n/n7vddrbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c65vfbbco"/><path class="n7vddrbeh"/></g>`,
		"fallback": "streamline-sharp:chat-bubble-typing-oval",
	});
}

export default Component;
