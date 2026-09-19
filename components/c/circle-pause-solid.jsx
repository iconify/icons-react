import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq7wl2-2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uq7wl2-2x"/>`,
		"fallback": "flowbite:circle-pause-solid",
	});
}

export default Component;
