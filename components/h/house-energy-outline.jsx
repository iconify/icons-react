import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccdje9g3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccdje9g3s"/>`,
		"fallback": "mdi:house-energy-outline",
	});
}

export default Component;
