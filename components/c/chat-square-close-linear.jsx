import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eq3frqb0l.css';
import '../../css/i/iuleykb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eq3frqb0l"/><path class="iuleykb2q"/></g>`,
		"fallback": "solar:chat-square-close-linear",
	});
}

export default Component;
