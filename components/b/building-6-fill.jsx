import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m17m7eb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m17m7eb-r"/>`,
		"fallback": "mingcute:building-6-fill",
	});
}

export default Component;
