import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/yprkt6b6c.css';
import '../../css/h/hhukqsb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="yprkt6b6c"/><path class="hhukqsb1q"/></g>`,
		"fallback": "hugeicons:acute",
	});
}

export default Component;
