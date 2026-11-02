import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn11p7b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn11p7b2i"/>`,
		"fallback": "mingcute:currency-rupee-2-fill",
	});
}

export default Component;
