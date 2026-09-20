import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9cjo8bfj.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9cjo8bfj"/>`,
		"fallback": "wpf:bright-moon",
	});
}

export default Component;
