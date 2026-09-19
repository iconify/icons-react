import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/armr2rj6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="armr2rj6m"/>`,
		"fallback": "flowbite:forward-solid",
	});
}

export default Component;
