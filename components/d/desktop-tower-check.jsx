import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hctegda8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hctegda8s"/>`,
		"fallback": "noviair-light:desktop-tower-check",
	});
}

export default Component;
