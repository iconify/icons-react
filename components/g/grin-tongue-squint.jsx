import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1b3pxbgu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1b3pxbgu"/>`,
		"fallback": "fa7-solid:grin-tongue-squint",
	});
}

export default Component;
