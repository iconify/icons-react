import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tpv6aibwy.css';
import '../../css/o/ooztnrzce.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tpv6aibwy"/><path class="ooztnrzce"/></g>`,
		"fallback": "streamline:chat-two-bubbles-oval",
	});
}

export default Component;
