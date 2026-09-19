import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uegh43x7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uegh43x7r"/>`,
		"fallback": "flowbite:code-branch-solid",
	});
}

export default Component;
