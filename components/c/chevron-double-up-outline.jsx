import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn24i51gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn24i51gl"/>`,
		"fallback": "flowbite:chevron-double-up-outline",
	});
}

export default Component;
