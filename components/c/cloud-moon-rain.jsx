import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w08-fwv8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w08-fwv8i"/>`,
		"fallback": "mynaui:cloud-moon-rain",
	});
}

export default Component;
