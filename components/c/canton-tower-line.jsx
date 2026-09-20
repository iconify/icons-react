import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_021rz3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_021rz3z"/>`,
		"fallback": "mingcute:canton-tower-line",
	});
}

export default Component;
