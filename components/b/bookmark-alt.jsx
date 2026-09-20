import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yftn1vhpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yftn1vhpa"/>`,
		"fallback": "meteor-icons:bookmark-alt",
	});
}

export default Component;
