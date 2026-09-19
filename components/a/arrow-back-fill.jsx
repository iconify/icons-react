import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brjgsq-7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brjgsq-7m"/>`,
		"fallback": "eva:arrow-back-fill",
	});
}

export default Component;
