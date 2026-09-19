import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcor0c4fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcor0c4fx"/>`,
		"fallback": "boxicons:book-alt-filled",
	});
}

export default Component;
