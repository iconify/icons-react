import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w7ty8bc8g.css';
import '../../css/k/kltjcob_y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="w7ty8bc8g"/><path class="kltjcob_y"/></g>`,
		"fallback": "streamline:chat-bubble-typing-oval",
	});
}

export default Component;
