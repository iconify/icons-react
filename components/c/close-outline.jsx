import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8ilc_b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8ilc_b3v"/>`,
		"fallback": "solar:close-outline",
	});
}

export default Component;
