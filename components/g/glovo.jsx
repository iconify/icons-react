import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg1z77b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg1z77b5k"/>`,
		"fallback": "thesvg-color:glovo",
	});
}

export default Component;
