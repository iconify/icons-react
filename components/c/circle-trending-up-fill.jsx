import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up_7tza4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up_7tza4p"/>`,
		"fallback": "keyline-icons:circle-trending-up-fill",
	});
}

export default Component;
