import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1bgs2boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1bgs2boc"/>`,
		"fallback": "flowbite:archive-arrow-down-solid",
	});
}

export default Component;
