import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf6rktajg.css';
import '../../css/f/fd0ve6bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf6rktajg"/><path class="fd0ve6bab"/>`,
		"fallback": "bx:bx-calendar",
	});
}

export default Component;
