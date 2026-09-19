import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkz9z_bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkz9z_bdr"/>`,
		"fallback": "flowbite:dots-horizontal-outline",
	});
}

export default Component;
