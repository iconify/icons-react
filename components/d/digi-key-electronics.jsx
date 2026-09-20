import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7vi-tn5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7vi-tn5r"/>`,
		"fallback": "thesvg-color:digi-key-electronics",
	});
}

export default Component;
