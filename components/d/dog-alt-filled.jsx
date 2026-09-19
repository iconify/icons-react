import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ice-8pbwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ice-8pbwl"/>`,
		"fallback": "boxicons:dog-alt-filled",
	});
}

export default Component;
