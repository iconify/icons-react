import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6uie1dvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6uie1dvp"/>`,
		"fallback": "flowbite:chart-mixed-dollar-outline",
	});
}

export default Component;
