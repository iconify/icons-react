import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtu15_roz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtu15_roz"/>`,
		"fallback": "flowbite:glass-water-solid",
	});
}

export default Component;
