import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l4nurs30k.css';
import '../../css/p/p68x__xhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l4nurs30k"/><path class="p68x__xhz"/></g>`,
		"fallback": "streamline-sharp:contact-book",
	});
}

export default Component;
