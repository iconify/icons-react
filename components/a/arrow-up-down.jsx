import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0y3xy14v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0y3xy14v"/>`,
		"fallback": "mynaui:arrow-up-down",
	});
}

export default Component;
