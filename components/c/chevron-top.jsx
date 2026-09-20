import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb6fqubbm.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb6fqubbm"/>`,
		"fallback": "oi:chevron-top",
	});
}

export default Component;
