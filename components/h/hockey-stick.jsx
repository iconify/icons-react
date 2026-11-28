import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i1xyctdgu.css';
import '../../css/w/we75vjb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i1xyctdgu"/><path class="we75vjb4y"/></g>`,
		"fallback": "iconaut:hockey-stick",
	});
}

export default Component;
