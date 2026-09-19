import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pin2mcbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pin2mcbkv"/>`,
		"fallback": "flowbite:hotdog-outline",
	});
}

export default Component;
