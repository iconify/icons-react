import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z34kj1bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z34kj1bih"/>`,
		"fallback": "flowbite:circle-check-solid",
	});
}

export default Component;
