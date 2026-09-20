import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehwi6-ffd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehwi6-ffd"/>`,
		"fallback": "ri:eraser-fill",
	});
}

export default Component;
