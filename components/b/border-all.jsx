import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87_r8bev.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87_r8bev"/>`,
		"fallback": "fa-solid:border-all",
	});
}

export default Component;
