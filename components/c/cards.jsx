import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzop4oy-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzop4oy-i"/>`,
		"fallback": "noviair-light:cards",
	});
}

export default Component;
