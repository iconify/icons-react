import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd835_n3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cd835_n3z"/>`,
		"fallback": "keyline-icons:hand-pointer-down-fill",
	});
}

export default Component;
