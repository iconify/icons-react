import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayj793kpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayj793kpq"/>`,
		"fallback": "flowbite:arrow-up-right-from-square-outline",
	});
}

export default Component;
