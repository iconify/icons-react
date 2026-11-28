import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnehqz2zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnehqz2zm"/>`,
		"fallback": "noviair-light:align-justify",
	});
}

export default Component;
