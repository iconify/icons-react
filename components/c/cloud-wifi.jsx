import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr4tk2b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr4tk2b9z"/>`,
		"fallback": "uil:cloud-wifi",
	});
}

export default Component;
