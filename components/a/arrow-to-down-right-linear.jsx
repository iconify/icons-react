import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdtrcfbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdtrcfbru"/>`,
		"fallback": "solar:arrow-to-down-right-linear",
	});
}

export default Component;
