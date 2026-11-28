import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrr1d9bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrr1d9bvx"/>`,
		"fallback": "noviair-light:contact-x",
	});
}

export default Component;
