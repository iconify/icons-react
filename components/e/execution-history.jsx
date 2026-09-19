import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqv9ttb4c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqv9ttb4c"/>`,
		"fallback": "carbon:execution-history",
	});
}

export default Component;
