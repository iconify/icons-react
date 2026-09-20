import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivv9obcxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivv9obcxm"/>`,
		"fallback": "mdi:fridge-industrial-alert-outline",
	});
}

export default Component;
