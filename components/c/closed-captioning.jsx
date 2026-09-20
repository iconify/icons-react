import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvywd9rkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvywd9rkh"/>`,
		"fallback": "uil:closed-captioning",
	});
}

export default Component;
