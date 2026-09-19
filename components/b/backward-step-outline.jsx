import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia86285af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia86285af"/>`,
		"fallback": "flowbite:backward-step-outline",
	});
}

export default Component;
