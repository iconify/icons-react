import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz0y5abce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz0y5abce"/>`,
		"fallback": "bx:bxs-home-circle",
	});
}

export default Component;
