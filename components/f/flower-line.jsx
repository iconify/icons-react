import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmx0jjb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmx0jjb4c"/>`,
		"fallback": "mingcute:flower-line",
	});
}

export default Component;
