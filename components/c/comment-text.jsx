import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei1tkyb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei1tkyb6r"/>`,
		"fallback": "pixelarticons:comment-text",
	});
}

export default Component;
