import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr2-x0j6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr2-x0j6j"/>`,
		"fallback": "bx:bxl-jsfiddle",
	});
}

export default Component;
