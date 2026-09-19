import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1y_2yb4z.css';

const viewBox = {"width":768,"height":661};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1y_2yb4z"/>`,
		"fallback": "ls:car",
	});
}

export default Component;
