import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r417itu3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r417itu3t"/>`,
		"fallback": "mdi:battery-charging-100",
	});
}

export default Component;
