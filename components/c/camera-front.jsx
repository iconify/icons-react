import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eguhn5b9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eguhn5b9n"/>`,
		"fallback": "mdi:camera-front",
	});
}

export default Component;
