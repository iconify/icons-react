import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi7_ttbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi7_ttbiz"/>`,
		"fallback": "mingcute:badge-plus-fill",
	});
}

export default Component;
