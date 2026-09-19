import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwm7a-bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwm7a-bih"/>`,
		"fallback": "flowbite:database-outline",
	});
}

export default Component;
