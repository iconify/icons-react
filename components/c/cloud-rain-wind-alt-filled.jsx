import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u60ek76zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u60ek76zo"/>`,
		"fallback": "boxicons:cloud-rain-wind-alt-filled",
	});
}

export default Component;
