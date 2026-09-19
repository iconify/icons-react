import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjrh5hfer.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjrh5hfer"/>`,
		"fallback": "boxicons:caret-left-filled",
	});
}

export default Component;
