import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvt3r3ygm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvt3r3ygm"/>`,
		"fallback": "mdi:human-female-girl",
	});
}

export default Component;
