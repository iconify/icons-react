import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/altw2ob-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="altw2ob-r"/>`,
		"fallback": "flowbite:arrow-right-alt-outline",
	});
}

export default Component;
