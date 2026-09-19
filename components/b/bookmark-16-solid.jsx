import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-0pfv32i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-0pfv32i"/>`,
		"fallback": "heroicons:bookmark-16-solid",
	});
}

export default Component;
