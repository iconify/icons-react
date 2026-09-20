import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v47miac_o.css';
import '../../css/y/y2oycp8_m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="v47miac_o"/><path class="y2oycp8_m"/></g>`,
		"fallback": "streamline:chat-bubble-oval-notification",
	});
}

export default Component;
