import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0nvpgb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0nvpgb4h"/>`,
		"fallback": "circum:coins-1",
	});
}

export default Component;
