import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu5ddhb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu5ddhb4b"/>`,
		"fallback": "cbi:air-filter",
	});
}

export default Component;
