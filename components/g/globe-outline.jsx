import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znezuzb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znezuzb6b"/>`,
		"fallback": "flowbite:globe-outline",
	});
}

export default Component;
