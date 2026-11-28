import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fib0t9bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fib0t9bty"/>`,
		"fallback": "noviair:hard-hat-check",
	});
}

export default Component;
