import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/saij5kb4t.css';
import '../../css/n/n3xvoccbk.css';
import '../../css/t/te09yrbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="saij5kb4t"/><path class="n3xvoccbk"/><path class="te09yrbly"/></g>`,
		"fallback": "iconaut:arrow-down-to-line-duo",
	});
}

export default Component;
