import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_3q34b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_3q34b3z"/>`,
		"fallback": "solar:clipboard-outline",
	});
}

export default Component;
