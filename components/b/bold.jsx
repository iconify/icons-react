import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg-bs7b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg-bs7b1u"/>`,
		"fallback": "mi:bold",
	});
}

export default Component;
