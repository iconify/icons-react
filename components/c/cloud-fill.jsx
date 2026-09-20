import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1rn9v5yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w1rn9v5yf"/>`,
		"fallback": "si:cloud-fill",
	});
}

export default Component;
