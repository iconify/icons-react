import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7ohubbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7ohubbxa"/>`,
		"fallback": "keyline-icons:badge-plus-fill",
	});
}

export default Component;
