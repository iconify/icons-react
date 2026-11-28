import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nge_245jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nge_245jz"/>`,
		"fallback": "noviair-light:cookie-gear",
	});
}

export default Component;
