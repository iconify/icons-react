import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq04mtb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq04mtb3r"/>`,
		"fallback": "flowbite:bars-from-left-solid",
	});
}

export default Component;
