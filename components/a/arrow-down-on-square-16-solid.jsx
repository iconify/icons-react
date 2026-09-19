import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le96lqbjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le96lqbjb"/>`,
		"fallback": "heroicons:arrow-down-on-square-16-solid",
	});
}

export default Component;
