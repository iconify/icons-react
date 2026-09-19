import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f89pw3byy.css';
import '../../css/d/d2jw_nbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f89pw3byy"/><path class="d2jw_nbeg"/>`,
		"fallback": "bx:bxs-microphone-alt",
	});
}

export default Component;
