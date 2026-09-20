import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if2qp-b_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if2qp-b_b"/>`,
		"fallback": "mdi:heater",
	});
}

export default Component;
