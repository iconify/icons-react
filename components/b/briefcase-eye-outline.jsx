import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x58xkwtsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x58xkwtsa"/>`,
		"fallback": "mdi:briefcase-eye-outline",
	});
}

export default Component;
