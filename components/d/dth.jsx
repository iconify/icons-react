import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w85oa8b0c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w85oa8b0c"/>`,
		"fallback": "cryptocurrency:dth",
	});
}

export default Component;
