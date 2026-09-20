import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch_5q9b4u.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch_5q9b4u"/>`,
		"fallback": "memory:box-light-horizontal-up",
	});
}

export default Component;
