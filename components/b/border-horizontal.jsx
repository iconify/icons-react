import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm8holt9s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm8holt9s"/>`,
		"fallback": "zondicons:border-horizontal",
	});
}

export default Component;
