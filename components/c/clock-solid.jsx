import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hch5jjbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hch5jjbyy"/>`,
		"fallback": "flowbite:clock-solid",
	});
}

export default Component;
