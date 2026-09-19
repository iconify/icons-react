import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2d0i-b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2d0i-b9k"/>`,
		"fallback": "boxicons:beer-filled",
	});
}

export default Component;
