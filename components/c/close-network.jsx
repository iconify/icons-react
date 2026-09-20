import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg54w6bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg54w6bmj"/>`,
		"fallback": "mdi:close-network",
	});
}

export default Component;
