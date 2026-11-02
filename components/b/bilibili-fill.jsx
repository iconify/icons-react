import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mba1edc8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mba1edc8c"/>`,
		"fallback": "mingcute:bilibili-fill",
	});
}

export default Component;
