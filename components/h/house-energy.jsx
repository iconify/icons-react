import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msac1ccpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msac1ccpm"/>`,
		"fallback": "mdi:house-energy",
	});
}

export default Component;
