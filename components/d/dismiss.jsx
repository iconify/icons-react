import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hszbwt4ao.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hszbwt4ao"/>`,
		"fallback": "dashicons:dismiss",
	});
}

export default Component;
