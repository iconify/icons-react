import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfk3eub9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfk3eub9v"/>`,
		"fallback": "mingcute:arrow-left-up-circle-line",
	});
}

export default Component;
