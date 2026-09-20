import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og44e43fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og44e43fd"/>`,
		"fallback": "mynaui:cart-x-solid",
	});
}

export default Component;
