import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km82hcy6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km82hcy6c"/>`,
		"fallback": "flowbite:caption-outline",
	});
}

export default Component;
