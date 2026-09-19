import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjullhr4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjullhr4y"/>`,
		"fallback": "flowbite:book-open-outline",
	});
}

export default Component;
