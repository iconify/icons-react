import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y937k6bea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y937k6bea"/>`,
		"fallback": "mingcute:arrows-down-fill",
	});
}

export default Component;
