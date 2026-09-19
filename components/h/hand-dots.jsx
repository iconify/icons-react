import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmp39m8qx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmp39m8qx"/>`,
		"fallback": "fa7-solid:hand-dots",
	});
}

export default Component;
