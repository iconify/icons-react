import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y96k3lb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y96k3lb1t"/>`,
		"fallback": "flowbite:insert-table-alt-outline",
	});
}

export default Component;
