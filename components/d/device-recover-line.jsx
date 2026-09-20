import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy9o1kbaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy9o1kbaq"/>`,
		"fallback": "ri:device-recover-line",
	});
}

export default Component;
