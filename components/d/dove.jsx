import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1wm25bsc.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1wm25bsc"/>`,
		"fallback": "fa7-solid:dove",
	});
}

export default Component;
