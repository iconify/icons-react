import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug4ifvviu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug4ifvviu"/>`,
		"fallback": "griddy-icons:connectivity-filled",
	});
}

export default Component;
