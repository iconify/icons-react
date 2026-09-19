import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7jgdjm3q.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7jgdjm3q"/>`,
		"fallback": "fa7-solid:forward-fast",
	});
}

export default Component;
