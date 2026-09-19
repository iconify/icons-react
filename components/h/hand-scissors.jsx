import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp9cyddoq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp9cyddoq"/>`,
		"fallback": "fa7-solid:hand-scissors",
	});
}

export default Component;
