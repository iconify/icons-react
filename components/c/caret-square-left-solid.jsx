import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eugv6vbyj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eugv6vbyj"/>`,
		"fallback": "la:caret-square-left-solid",
	});
}

export default Component;
