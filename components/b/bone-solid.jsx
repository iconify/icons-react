import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dok-f4htb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dok-f4htb"/>`,
		"fallback": "flowbite:bone-solid",
	});
}

export default Component;
