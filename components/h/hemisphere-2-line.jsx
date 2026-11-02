import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcn7q4-vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcn7q4-vh"/>`,
		"fallback": "mingcute:hemisphere-2-line",
	});
}

export default Component;
