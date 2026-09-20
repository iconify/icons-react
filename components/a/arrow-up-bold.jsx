import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjedo3yta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjedo3yta"/>`,
		"fallback": "solar:arrow-up-bold",
	});
}

export default Component;
