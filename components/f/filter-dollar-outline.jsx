import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jclt3ehgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jclt3ehgl"/>`,
		"fallback": "flowbite:filter-dollar-outline",
	});
}

export default Component;
