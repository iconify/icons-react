import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp0we2b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cp0we2b3o"/>`,
		"fallback": "flowbite:inbox-full-solid",
	});
}

export default Component;
