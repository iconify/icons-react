import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frf-6rb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frf-6rb7c"/>`,
		"fallback": "mingcute:heading-2-line",
	});
}

export default Component;
