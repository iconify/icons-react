import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2d48ia-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2d48ia-n"/>`,
		"fallback": "healthicons:hot-meal-24px",
	});
}

export default Component;
