import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6t-ros_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6t-ros_g"/>`,
		"fallback": "griddy-icons:chart-bar-square-down-filled",
	});
}

export default Component;
