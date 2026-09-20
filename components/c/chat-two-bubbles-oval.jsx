import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/zmlbzc7xc.css';
import '../../css/r/rzey__6jv.css';
import '../../css/w/wexal31vk.css';
import '../../css/z/zf3be8bvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="zmlbzc7xc"/><path class="rzey__6jv"/><path class="wexal31vk"/><path class="zf3be8bvo"/></g>`,
		"fallback": "streamline-plump-color:chat-two-bubbles-oval",
	});
}

export default Component;
