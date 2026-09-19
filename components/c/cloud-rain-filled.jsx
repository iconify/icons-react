import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz1q1stlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz1q1stlw"/>`,
		"fallback": "boxicons:cloud-rain-filled",
	});
}

export default Component;
