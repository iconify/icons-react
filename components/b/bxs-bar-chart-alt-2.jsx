import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo6i32hen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo6i32hen"/>`,
		"fallback": "bx:bxs-bar-chart-alt-2",
	});
}

export default Component;
