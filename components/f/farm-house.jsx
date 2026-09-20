import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xphyfpx8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xphyfpx8v"/>`,
		"fallback": "mdi:farm-house",
	});
}

export default Component;
