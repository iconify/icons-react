import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u50sa1e_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u50sa1e_u"/>`,
		"fallback": "flowbite:apple-full-solid",
	});
}

export default Component;
