import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6g4r_b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6g4r_b0r"/>`,
		"fallback": "mingcute:card-refund-fill",
	});
}

export default Component;
