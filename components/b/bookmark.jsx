import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc3lr507y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc3lr507y"/>`,
		"fallback": "pixelarticons:bookmark",
	});
}

export default Component;
