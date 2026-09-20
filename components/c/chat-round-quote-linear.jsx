import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/r/r4hgo-o8c.css';
import '../../css/r/rhlq74bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="r4hgo-o8c"/><path class="rhlq74bwf"/></g>`,
		"fallback": "solar:chat-round-quote-linear",
	});
}

export default Component;
