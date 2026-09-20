import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql33l8pgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql33l8pgd"/>`,
		"fallback": "mdi:account-outline",
	});
}

export default Component;
