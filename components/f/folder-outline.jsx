import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnjif5a_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnjif5a_v"/>`,
		"fallback": "flowbite:folder-outline",
	});
}

export default Component;
