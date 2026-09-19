import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3mevab6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f3mevab6u"/>`,
		"fallback": "flowbite:code-fork-solid",
	});
}

export default Component;
