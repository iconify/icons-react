import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf-4vfz_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf-4vfz_j"/>`,
		"fallback": "noviair-light:dashboard",
	});
}

export default Component;
