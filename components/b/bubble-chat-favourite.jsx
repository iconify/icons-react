import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/psncwcctr.css';
import '../../css/o/oqjd98bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="psncwcctr"/><path class="oqjd98bgp"/></g>`,
		"fallback": "hugeicons:bubble-chat-favourite",
	});
}

export default Component;
