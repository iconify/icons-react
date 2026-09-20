import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a37f418yp.css';
import '../../css/a/adjgelb-v.css';
import '../../css/m/m01tqt6ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a37f418yp"/><path class="adjgelb-v"/><path class="m01tqt6ee"/></g>`,
		"fallback": "majesticons:cash-line",
	});
}

export default Component;
