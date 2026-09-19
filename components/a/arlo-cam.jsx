import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq7lwhbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq7lwhbil"/>`,
		"fallback": "cbi:arlo-cam",
	});
}

export default Component;
