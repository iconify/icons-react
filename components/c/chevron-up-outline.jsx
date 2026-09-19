import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2-u_vb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2-u_vb7l"/>`,
		"fallback": "flowbite:chevron-up-outline",
	});
}

export default Component;
