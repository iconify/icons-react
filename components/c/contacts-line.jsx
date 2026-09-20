import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnjj2qbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnjj2qbym"/>`,
		"fallback": "ri:contacts-line",
	});
}

export default Component;
