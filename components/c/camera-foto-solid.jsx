import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph-l3p-7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ph-l3p-7w"/>`,
		"fallback": "flowbite:camera-foto-solid",
	});
}

export default Component;
