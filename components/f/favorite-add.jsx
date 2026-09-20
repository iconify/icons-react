import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe1boo_8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe1boo_8z"/>`,
		"fallback": "mdi:favorite-add",
	});
}

export default Component;
