import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa309cbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa309cbqn"/>`,
		"fallback": "simple-icons:googlemybusiness",
	});
}

export default Component;
