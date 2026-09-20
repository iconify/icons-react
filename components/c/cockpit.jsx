import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayhy9ccsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayhy9ccsu"/>`,
		"fallback": "thesvg-color:cockpit",
	});
}

export default Component;
