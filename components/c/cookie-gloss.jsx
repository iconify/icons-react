import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es44c5b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es44c5b1z"/>`,
		"fallback": "withicons:cookie-gloss",
	});
}

export default Component;
