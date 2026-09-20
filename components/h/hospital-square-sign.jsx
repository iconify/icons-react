import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inzgnbc9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inzgnbc9d"/>`,
		"fallback": "uil:hospital-square-sign",
	});
}

export default Component;
