import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4e79wb0p.css';
import '../../css/m/myrkvvb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4e79wb0p"/><path class="myrkvvb4r"/>`,
		"fallback": "boxicons:business",
	});
}

export default Component;
