import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4b11056f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4b11056f"/>`,
		"fallback": "mingcute:flag-1-line",
	});
}

export default Component;
