import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-zv1rukz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-zv1rukz"/>`,
		"fallback": "ri:align-item-horizontal-center-fill",
	});
}

export default Component;
