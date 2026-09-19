import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro3ba9bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro3ba9bcu"/>`,
		"fallback": "griddy-icons:beta",
	});
}

export default Component;
