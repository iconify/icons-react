import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekym8_b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekym8_b2r"/>`,
		"fallback": "mingcute:cookie-fill",
	});
}

export default Component;
