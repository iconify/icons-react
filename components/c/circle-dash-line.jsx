import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh51m1bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh51m1bgh"/>`,
		"fallback": "mingcute:circle-dash-line",
	});
}

export default Component;
