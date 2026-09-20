import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/d/dv6re0b-t.css';
import '../../css/f/fg8gx3brw.css';
import '../../css/s/s8ro7484l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="dv6re0b-t"/><path class="fg8gx3brw"/><path class="s8ro7484l"/></g>`,
		"fallback": "solar:chat-round-call-linear",
	});
}

export default Component;
