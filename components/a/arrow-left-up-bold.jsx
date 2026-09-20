import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9l716tmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9l716tmo"/>`,
		"fallback": "solar:arrow-left-up-bold",
	});
}

export default Component;
