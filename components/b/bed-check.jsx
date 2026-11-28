import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcw-0tbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcw-0tbyh"/>`,
		"fallback": "noviair-light:bed-check",
	});
}

export default Component;
