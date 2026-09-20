import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la14y0b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la14y0b1m"/>`,
		"fallback": "ri:folder-close-fill",
	});
}

export default Component;
