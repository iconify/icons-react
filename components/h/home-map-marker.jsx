import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/te7uawurk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="te7uawurk"/>`,
		"fallback": "mdi:home-map-marker",
	});
}

export default Component;
