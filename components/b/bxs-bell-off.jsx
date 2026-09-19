import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmw53x3_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmw53x3_z"/>`,
		"fallback": "bx:bxs-bell-off",
	});
}

export default Component;
