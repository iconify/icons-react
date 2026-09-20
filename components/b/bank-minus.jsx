import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey4o1_bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey4o1_bee"/>`,
		"fallback": "mdi:bank-minus",
	});
}

export default Component;
