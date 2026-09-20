import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m661uj1fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m661uj1fl"/>`,
		"fallback": "mingcute:currency-rupee-2-fill",
	});
}

export default Component;
