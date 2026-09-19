import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmqjhwbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmqjhwbji"/>`,
		"fallback": "griddy-icons:arrow-circle-up-right-filled",
	});
}

export default Component;
