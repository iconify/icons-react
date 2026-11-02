import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td961sb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td961sb8f"/>`,
		"fallback": "mingcute:arrow-left-down-fill",
	});
}

export default Component;
