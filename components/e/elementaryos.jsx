import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vonv1ccfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vonv1ccfy"/>`,
		"fallback": "file-icons:elementaryos",
	});
}

export default Component;
