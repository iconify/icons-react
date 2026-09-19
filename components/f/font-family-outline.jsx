import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du7zlccih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du7zlccih"/>`,
		"fallback": "flowbite:font-family-outline",
	});
}

export default Component;
