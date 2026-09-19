import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekpdr3b5r.css';
import '../../css/e/efymmnokm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ekpdr3b5r"/><path class="efymmnokm"/></g>`,
		"fallback": "hugeicons:folder-audio",
	});
}

export default Component;
