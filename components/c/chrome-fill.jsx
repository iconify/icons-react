import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sofh-7f6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sofh-7f6e"/>`,
		"fallback": "mingcute:chrome-fill",
	});
}

export default Component;
