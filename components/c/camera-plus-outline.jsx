import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mabm5lwov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mabm5lwov"/>`,
		"fallback": "mdi:camera-plus-outline",
	});
}

export default Component;
