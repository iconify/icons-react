import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxji21-fc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uxji21-fc"/>`,
		"fallback": "flowbite:close-circle-solid",
	});
}

export default Component;
