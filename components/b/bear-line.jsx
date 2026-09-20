import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys2xnwm9y.css';
import '../../css/c/cc8xe5byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys2xnwm9y"/><path class="cc8xe5byi"/>`,
		"fallback": "mingcute:bear-line",
	});
}

export default Component;
