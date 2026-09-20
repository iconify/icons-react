import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3w6pbbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3w6pbbgc"/>`,
		"fallback": "thesvg:bank-of-america",
	});
}

export default Component;
