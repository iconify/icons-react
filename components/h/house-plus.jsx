import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpi5w_ocz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpi5w_ocz"/>`,
		"fallback": "mdi:house-plus",
	});
}

export default Component;
