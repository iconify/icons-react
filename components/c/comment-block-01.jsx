import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5uh-ubrk.css';
import '../../css/l/l-u631b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l5uh-ubrk"/><path class="l-u631b5i"/></g>`,
		"fallback": "hugeicons:comment-block-01",
	});
}

export default Component;
