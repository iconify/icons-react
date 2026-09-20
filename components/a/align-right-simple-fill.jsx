import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu4d_7b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nu4d_7b_u"/>`,
		"fallback": "si:align-right-simple-fill",
	});
}

export default Component;
