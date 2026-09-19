import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg1qh8o8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg1qh8o8u"/>`,
		"fallback": "iconamoon:arrow-top-left-1-thin",
	});
}

export default Component;
