import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/f23h26hom.css';
import '../../css/f/fwl54ibzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="f23h26hom"/><path class="fwl54ibzw"/></g>`,
		"fallback": "streamline-sharp-color:chat-bubble-disable-oval",
	});
}

export default Component;
