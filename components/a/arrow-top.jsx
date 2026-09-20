import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5e98f89i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5e98f89i"/>`,
		"fallback": "oi:arrow-top",
	});
}

export default Component;
