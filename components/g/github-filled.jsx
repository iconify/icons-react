import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4c2d03ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4c2d03ai"/>`,
		"fallback": "griddy-icons:github-filled",
	});
}

export default Component;
