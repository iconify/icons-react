import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp3hv2d4a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp3hv2d4a"/>`,
		"fallback": "energy-icons:heart-20-bold",
	});
}

export default Component;
