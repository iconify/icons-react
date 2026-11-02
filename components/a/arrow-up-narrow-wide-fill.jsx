import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfejm6x_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfejm6x_t"/>`,
		"fallback": "mingcute:arrow-up-narrow-wide-fill",
	});
}

export default Component;
