import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0lr8ub9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0lr8ub9c"/>`,
		"fallback": "noviair:donut",
	});
}

export default Component;
