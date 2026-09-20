import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj4_tdpqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj4_tdpqr"/>`,
		"fallback": "keyline-icons:arrow-big-down-short-fill",
	});
}

export default Component;
