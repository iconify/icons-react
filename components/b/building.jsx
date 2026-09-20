import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqwm0ibda.css';

const viewBox = {"width":24,"height":24,"left":-5.5,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqwm0ibda"/>`,
		"fallback": "jam:building",
	});
}

export default Component;
