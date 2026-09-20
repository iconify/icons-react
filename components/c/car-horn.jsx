import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrlen5bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrlen5bxu"/>`,
		"fallback": "mdi:car-horn",
	});
}

export default Component;
