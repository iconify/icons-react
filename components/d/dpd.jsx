import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct65_nbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct65_nbnb"/>`,
		"fallback": "thesvg-color:dpd",
	});
}

export default Component;
