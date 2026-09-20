import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a72iadcaj.css';
import '../../css/k/kw_5c9b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a72iadcaj"/><path class="kw_5c9b7v"/></g>`,
		"fallback": "streamline-sharp:chat-two-bubbles-oval",
	});
}

export default Component;
