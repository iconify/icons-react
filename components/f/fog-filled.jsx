import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgel0ubwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgel0ubwm"/>`,
		"fallback": "reicon:fog-filled",
	});
}

export default Component;
