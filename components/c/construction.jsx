import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5phmq9_u.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5phmq9_u"/>`,
		"fallback": "lineicons:construction",
	});
}

export default Component;
