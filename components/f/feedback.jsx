import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owov43b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owov43b1c"/>`,
		"fallback": "mdi:feedback",
	});
}

export default Component;
