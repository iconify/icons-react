import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7q0rkbcu.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7q0rkbcu"/>`,
		"fallback": "ls:globe",
	});
}

export default Component;
