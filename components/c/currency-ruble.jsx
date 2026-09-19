import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y84s00bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y84s00bcp"/>`,
		"fallback": "griddy-icons:currency-ruble",
	});
}

export default Component;
