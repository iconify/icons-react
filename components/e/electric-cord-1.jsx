import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_9hxbcjy.css';
import '../../css/t/t5_e6gbyj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_9hxbcjy"/><path class="t5_e6gbyj"/></g>`,
		"fallback": "streamline-flex-color:electric-cord-1",
	});
}

export default Component;
