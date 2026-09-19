import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhkvmrhwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhkvmrhwx"/>`,
		"fallback": "bx:bx-envelope-open",
	});
}

export default Component;
