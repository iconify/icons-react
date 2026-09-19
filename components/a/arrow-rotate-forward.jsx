import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrbh40buu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrbh40buu"/>`,
		"fallback": "fa7-solid:arrow-rotate-forward",
	});
}

export default Component;
