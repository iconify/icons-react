import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjvm78bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjvm78bis"/>`,
		"fallback": "bx:bxs-heart",
	});
}

export default Component;
