import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hye2qnbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hye2qnbqh"/>`,
		"fallback": "iconaut:chart-spline-solid",
	});
}

export default Component;
