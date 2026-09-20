import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrh8mub3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrh8mub3o"/>`,
		"fallback": "mingcute:bnb-fill",
	});
}

export default Component;
