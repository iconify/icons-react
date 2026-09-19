import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c003x8brs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c003x8brs"/>`,
		"fallback": "heroicons:cursor-arrow-rays-20-solid",
	});
}

export default Component;
