import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3h6enghf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3h6enghf"/>`,
		"fallback": "thesvg-color:eclipse-jetty",
	});
}

export default Component;
