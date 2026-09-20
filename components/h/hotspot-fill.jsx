import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7e5a7pja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7e5a7pja"/>`,
		"fallback": "ri:hotspot-fill",
	});
}

export default Component;
