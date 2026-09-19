import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z28-l3b8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z28-l3b8m"/>`,
		"fallback": "flowbite:candy-cane-solid",
	});
}

export default Component;
