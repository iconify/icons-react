import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7nkztb0k.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7nkztb0k"/>`,
		"fallback": "fa7-solid:chess-board",
	});
}

export default Component;
