import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef8m4s5nf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef8m4s5nf"/>`,
		"fallback": "cryptocurrency:ctxc",
	});
}

export default Component;
