import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9y-sxz8e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9y-sxz8e"/>`,
		"fallback": "f7:arrow-left-square",
	});
}

export default Component;
