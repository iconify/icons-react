import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnmrr0r5c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnmrr0r5c"/>`,
		"fallback": "simple-line-icons:eye",
	});
}

export default Component;
