import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgqeagbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgqeagbus"/>`,
		"fallback": "ri:focus-3-fill",
	});
}

export default Component;
