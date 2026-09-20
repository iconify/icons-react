import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alx9w2vyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alx9w2vyn"/>`,
		"fallback": "thesvg-color:iberia",
	});
}

export default Component;
