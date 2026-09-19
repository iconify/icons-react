import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w90dy4fzn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w90dy4fzn"/>`,
		"fallback": "fa7-solid:chess-queen",
	});
}

export default Component;
