import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tejl1ydti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tejl1ydti"/>`,
		"fallback": "mdi:bridge",
	});
}

export default Component;
