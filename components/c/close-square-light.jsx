import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vubcf06gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vubcf06gl"/>`,
		"fallback": "lets-icons:close-square-light",
	});
}

export default Component;
