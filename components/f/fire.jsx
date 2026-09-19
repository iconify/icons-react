import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyj6__bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyj6__bvl"/>`,
		"fallback": "boxicons:fire",
	});
}

export default Component;
