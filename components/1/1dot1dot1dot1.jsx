import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-4vy0bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-4vy0bvm"/>`,
		"fallback": "thesvg-color:1dot1dot1dot1",
	});
}

export default Component;
