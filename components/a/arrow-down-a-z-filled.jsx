import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh6o4c0gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh6o4c0gc"/>`,
		"fallback": "boxicons:arrow-down-a-z-filled",
	});
}

export default Component;
