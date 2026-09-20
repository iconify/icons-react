import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f37w8wlql.css';
import '../../css/f/f0ijdob7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f37w8wlql"/><path class="f0ijdob7i"/></g>`,
		"fallback": "streamline-flex:help-chat-1",
	});
}

export default Component;
