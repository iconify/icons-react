import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz763k3fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz763k3fa"/>`,
		"fallback": "mingcute:heading-3-line",
	});
}

export default Component;
