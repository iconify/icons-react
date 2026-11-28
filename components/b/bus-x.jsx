import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfcoj9b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfcoj9b5l"/>`,
		"fallback": "noviair-light:bus-x",
	});
}

export default Component;
