import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouiu2whas.css';

const viewBox = {"width":768,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiu2whas"/>`,
		"fallback": "ls:backspace",
	});
}

export default Component;
