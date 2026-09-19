import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv8z3-74d.css';

const viewBox = {"width":697,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv8z3-74d"/>`,
		"fallback": "ls:coffee",
	});
}

export default Component;
