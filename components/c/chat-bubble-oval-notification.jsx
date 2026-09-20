import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkbisqbsd.css';
import '../../css/o/o0ovufbew.css';
import '../../css/y/y5c-idbjg.css';
import '../../css/a/al5je41ek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wkbisqbsd"/><path class="o0ovufbew"/><path class="y5c-idbjg"/><path class="al5je41ek"/></g>`,
		"fallback": "streamline-color:chat-bubble-oval-notification",
	});
}

export default Component;
