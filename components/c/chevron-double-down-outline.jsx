import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac7du0n2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac7du0n2m"/>`,
		"fallback": "flowbite:chevron-double-down-outline",
	});
}

export default Component;
