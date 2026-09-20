import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roa83o8vb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roa83o8vb"/>`,
		"fallback": "thesvg-color:awesomewm",
	});
}

export default Component;
