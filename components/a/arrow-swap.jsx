import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua1k4no5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua1k4no5r"/>`,
		"fallback": "fontisto:arrow-swap",
	});
}

export default Component;
