import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efv4qke4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efv4qke4y"/>`,
		"fallback": "mdi:image-lock",
	});
}

export default Component;
