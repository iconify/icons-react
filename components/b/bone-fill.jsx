import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y79gy02xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y79gy02xz"/>`,
		"fallback": "mingcute:bone-fill",
	});
}

export default Component;
