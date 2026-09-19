import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxp_s1b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxp_s1b_p"/>`,
		"fallback": "eva:home-outline",
	});
}

export default Component;
