import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7xkpgilu.css';
import '../../css/a/ant0mux5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k7xkpgilu"/><path class="ant0mux5n"/></g>`,
		"fallback": "mage:arrow-left",
	});
}

export default Component;
