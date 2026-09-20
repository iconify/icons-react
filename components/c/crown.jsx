import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0s_u7b1z.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0s_u7b1z"/>`,
		"fallback": "picon:crown",
	});
}

export default Component;
