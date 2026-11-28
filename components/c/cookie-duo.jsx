import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q15d-ozjb.css';
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
		"content": `<path class="q15d-ozjb secondary"/><g class="dt0cm9dhy primary"><path class="ed6g4pb3y"/><path class="kxhf0ebkq"/></g>`,
		"fallback": "iconaut:cookie-duo",
	});
}

export default Component;
