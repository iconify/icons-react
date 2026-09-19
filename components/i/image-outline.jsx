import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbia1d73n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbia1d73n"/>`,
		"fallback": "flowbite:image-outline",
	});
}

export default Component;
