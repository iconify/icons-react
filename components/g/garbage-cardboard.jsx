import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivck_9bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivck_9bxx"/>`,
		"fallback": "cbi:garbage-cardboard",
	});
}

export default Component;
