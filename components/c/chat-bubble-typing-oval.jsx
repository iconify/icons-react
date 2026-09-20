import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkbisqbsd.css';
import '../../css/r/r_01umbet.css';
import '../../css/t/t84f3kdjv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkbisqbsd"/><path class="r_01umbet"/><path class="t84f3kdjv"/></g>`,
		"fallback": "streamline-color:chat-bubble-typing-oval",
	});
}

export default Component;
