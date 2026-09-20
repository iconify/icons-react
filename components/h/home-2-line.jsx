import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9c09kbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9c09kbdm"/>`,
		"fallback": "ri:home-2-line",
	});
}

export default Component;
