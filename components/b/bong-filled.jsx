import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m496c9reb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m496c9reb"/>`,
		"fallback": "boxicons:bong-filled",
	});
}

export default Component;
