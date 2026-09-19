import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms8vhaccy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms8vhaccy"/>`,
		"fallback": "flowbite:arrow-up-right-down-left-solid",
	});
}

export default Component;
