import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6-g0sprb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6-g0sprb"/>`,
		"fallback": "griddy-icons:cable-car-filled",
	});
}

export default Component;
