import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soi53cr5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soi53cr5t"/>`,
		"fallback": "mdi:chevron-down-circle-outline",
	});
}

export default Component;
