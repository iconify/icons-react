import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrpi9pbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrpi9pbqr"/>`,
		"fallback": "mingcute:facebook-fill",
	});
}

export default Component;
