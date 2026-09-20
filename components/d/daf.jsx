import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibke36b1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibke36b1g"/>`,
		"fallback": "thesvg-color:daf",
	});
}

export default Component;
