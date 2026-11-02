import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bld4o8l8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bld4o8l8l"/>`,
		"fallback": "mingcute:cat-line",
	});
}

export default Component;
