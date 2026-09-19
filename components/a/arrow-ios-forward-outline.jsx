import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk3rzjcjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk3rzjcjx"/>`,
		"fallback": "eva:arrow-ios-forward-outline",
	});
}

export default Component;
