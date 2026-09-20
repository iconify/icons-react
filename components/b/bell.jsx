import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmq8sbcxz.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmq8sbcxz"/>`,
		"fallback": "jam:bell",
	});
}

export default Component;
