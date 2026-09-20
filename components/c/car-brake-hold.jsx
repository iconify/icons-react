import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zix2v434n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zix2v434n"/>`,
		"fallback": "mdi:car-brake-hold",
	});
}

export default Component;
