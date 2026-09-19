import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpwc9-11a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpwc9-11a"/>`,
		"fallback": "flowbite:cash-outline",
	});
}

export default Component;
