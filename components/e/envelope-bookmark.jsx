import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux8hyabok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux8hyabok"/>`,
		"fallback": "uil:envelope-bookmark",
	});
}

export default Component;
