import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhmw1jw7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhmw1jw7q"/>`,
		"fallback": "mdi:human-white-cane",
	});
}

export default Component;
