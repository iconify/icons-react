import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd3epf6yf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd3epf6yf"/>`,
		"fallback": "ri:ie-line",
	});
}

export default Component;
