import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg-d_yb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg-d_yb6d"/>`,
		"fallback": "bx:bxs-chevron-up-square",
	});
}

export default Component;
