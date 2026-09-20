import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlxh3ub9z.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlxh3ub9z"/>`,
		"fallback": "jam:chevrons-circle-right-f",
	});
}

export default Component;
