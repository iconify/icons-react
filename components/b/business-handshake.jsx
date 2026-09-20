import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wloqi167c.css';
import '../../css/i/i5g12gbui.css';
import '../../css/f/fu_q3ibxu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wloqi167c"/><path class="i5g12gbui"/><path class="fu_q3ibxu"/></g>`,
		"fallback": "streamline:business-handshake",
	});
}

export default Component;
