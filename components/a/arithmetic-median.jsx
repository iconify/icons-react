import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_dy700on.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_dy700on"/>`,
		"fallback": "carbon:arithmetic-median",
	});
}

export default Component;
