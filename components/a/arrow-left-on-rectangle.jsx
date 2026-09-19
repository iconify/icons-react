import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxjktu_0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxjktu_0r"/>`,
		"fallback": "heroicons:arrow-left-on-rectangle",
	});
}

export default Component;
