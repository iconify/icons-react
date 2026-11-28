import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ed6g4pb3y.css';
import '../../css/k/kxhf0ebkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ed6g4pb3y"/><path class="kxhf0ebkq"/></g>`,
		"fallback": "iconaut:cookie",
	});
}

export default Component;
