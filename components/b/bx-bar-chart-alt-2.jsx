import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns-ktm3kz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns-ktm3kz"/>`,
		"fallback": "bx:bx-bar-chart-alt-2",
	});
}

export default Component;
