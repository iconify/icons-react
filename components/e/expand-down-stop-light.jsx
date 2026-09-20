import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn4xu6bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn4xu6bal"/>`,
		"fallback": "lets-icons:expand-down-stop-light",
	});
}

export default Component;
