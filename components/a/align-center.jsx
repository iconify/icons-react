import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yj_3fib4v.css';
import '../../css/e/ejq5akbzz.css';
import '../../css/q/qong8cbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yj_3fib4v"/><path class="ejq5akbzz"/><path class="qong8cbyf"/></g>`,
		"fallback": "streamline-ultimate-color:align-center",
	});
}

export default Component;
