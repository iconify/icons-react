import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwhkn3x3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwhkn3x3z"/>`,
		"fallback": "iconoir:heavy-rain",
	});
}

export default Component;
