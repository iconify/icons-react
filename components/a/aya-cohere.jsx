import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfwm6qbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfwm6qbkb"/>`,
		"fallback": "thesvg-color:aya-cohere",
	});
}

export default Component;
