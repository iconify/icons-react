import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exlscdc0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exlscdc0w"/>`,
		"fallback": "mdi:cash-marker",
	});
}

export default Component;
