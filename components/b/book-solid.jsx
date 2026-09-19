import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgfuf6b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgfuf6b2e"/>`,
		"fallback": "flowbite:book-solid",
	});
}

export default Component;
