import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydt4j0kfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydt4j0kfy"/>`,
		"fallback": "thesvg-color:eclipse-vert-x",
	});
}

export default Component;
