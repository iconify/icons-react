import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw1au2but.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw1au2but"/>`,
		"fallback": "eva:chevron-up-outline",
	});
}

export default Component;
