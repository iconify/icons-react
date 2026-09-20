import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1i-wyf2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1i-wyf2r"/>`,
		"fallback": "mingcute:earth-4-fill",
	});
}

export default Component;
