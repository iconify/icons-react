import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl5q3r92p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl5q3r92p"/>`,
		"fallback": "noviair:hospital-plus",
	});
}

export default Component;
