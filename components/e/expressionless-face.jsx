import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/hfq8jpu7i.css';
import '../../css/a/ae0h5kb0o.css';
import '../../css/y/y-5lwxgxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="hfq8jpu7i"/><path class="ae0h5kb0o"/><path class="y-5lwxgxu"/></g>`,
		"fallback": "iconamoon:expressionless-face",
	});
}

export default Component;
