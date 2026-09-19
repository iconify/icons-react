import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzgw91bhr.css';
import '../../css/g/g5a0k3b_k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hzgw91bhr"/><path class="g5a0k3b_k"/></g>`,
		"fallback": "cryptocurrency-color:cmm",
	});
}

export default Component;
