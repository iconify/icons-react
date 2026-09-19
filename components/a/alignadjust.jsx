import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0kbwcbfy.css';

const viewBox = {"width":666,"height":644};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0kbwcbfy"/>`,
		"fallback": "ls:alignadjust",
	});
}

export default Component;
